import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import clientPromise from '@/lib/mongodb';
import { verifyAdminSession, checkRateLimit } from '@/lib/auth';

async function notifyContactByEmail(params: {
  name: string;
  email: string;
  subject: string;
  message: string;
  ip: string;
  timestamp: Date;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      'RESEND_API_KEY is not set; skipping contact email notification (message still saved).'
    );
    return;
  }

  const to = process.env.CONTACT_NOTIFY_EMAIL;
  if (!to) {
    console.warn(
      'CONTACT_NOTIFY_EMAIL is not set; skipping contact email notification (message still saved).'
    );
    return;
  }

  const from =
    process.env.RESEND_FROM ?? 'Contact <onboarding@resend.dev>';

  const resend = new Resend(apiKey);
  const text = [
    'New contact form submission',
    '',
    `Name: ${params.name}`,
    `Email: ${params.email}`,
    `Subject: ${params.subject}`,
    `IP: ${params.ip}`,
    `Time: ${params.timestamp.toISOString()}`,
    '',
    'Message:',
    params.message,
  ].join('\n');

  const { data, error } = await resend.emails.send({
    from,
    to,
    replyTo: params.email,
    subject: `[Contact] ${params.subject}`,
    text,
  });

  if (error) {
    console.error(
      'Resend contact notification failed (message still saved):',
      error.message,
      error.name
    );
  } else {
    console.log('Contact notification email sent:', data?.id ?? '(no id)');
  }
}

export const dynamic = 'force-dynamic';

// GET endpoint to fetch all messages (with secure cookie-based authentication)
export async function GET(request: NextRequest) {
  try {
    // Verify authentication using secure cookie
    const isAuthenticated = await verifyAdminSession(request);
    
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in.' },
        { status: 401 }
      );
    }

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    if (!checkRateLimit(`admin_${ip}`, 100, 15 * 60 * 1000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const client = await clientPromise;
    const db = client.db('enwretched');
    const contactsCollection = db.collection('contacts');

    // Get query parameters for filtering and pagination
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status'); // 'all', 'unread', 'read', 'archived'
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = parseInt(searchParams.get('skip') || '0');

    // Build query
    let query: any = {};
    if (status && status !== 'all') {
      query.status = status;
    }

    // Fetch messages, sorted by newest first
    const messages = await contactsCollection
      .find(query)
      .sort({ timestamp: -1 })
      .limit(limit)
      .skip(skip)
      .toArray();

    // Get total count for pagination
    const totalCount = await contactsCollection.countDocuments(query);
    const unreadCount = await contactsCollection.countDocuments({ status: { $ne: 'read' } });

    return NextResponse.json({
      success: true,
      messages: messages.map(msg => ({
        _id: msg._id.toString(),
        name: msg.name,
        email: msg.email,
        subject: msg.subject,
        message: msg.message,
        timestamp: msg.timestamp,
        ip: msg.ip,
        status: msg.status || 'unread', // Default to unread if not set
        createdAt: msg.timestamp
      })),
      pagination: {
        total: totalCount,
        limit,
        skip,
        hasMore: skip + limit < totalCount
      },
      counts: {
        total: totalCount,
        unread: unreadCount
      }
    });

  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

// POST endpoint to create new messages
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if MongoDB is configured
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI is not configured in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error. Please contact the site administrator.' },
        { status: 500 }
      );
    }

    // Store in MongoDB
    let client;
    try {
      client = await clientPromise;
    } catch (dbError) {
      console.error('MongoDB connection error:', dbError);
      return NextResponse.json(
        { error: 'Database connection failed. Please try again later.' },
        { status: 500 }
      );
    }

    const db = client.db('enwretched');
    const contactsCollection = db.collection('contacts');

    const resolvedSubject =
      (typeof subject === 'string' && subject.trim()) || 'Contact Form Submission';
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown';
    const timestamp = new Date();

    const contactData = {
      name,
      email,
      subject: resolvedSubject,
      message,
      timestamp,
      ip,
      status: 'unread', // New messages start as unread
    };

    await contactsCollection.insertOne(contactData);

    await notifyContactByEmail({
      name,
      email,
      subject: resolvedSubject,
      message,
      ip,
      timestamp,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message! I\'ll get back to you soon.' 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
