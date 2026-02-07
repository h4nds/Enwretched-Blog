import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { verifyAdminSession, checkRateLimit } from '@/lib/auth';

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

    const contactData = {
      name,
      email,
      subject: subject || 'Contact Form Submission',
      message,
      timestamp: new Date(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      status: 'unread' // New messages start as unread
    };

    await contactsCollection.insertOne(contactData);

    // Send email notification (you'll need to set up email service)
    // For now, we'll just log it
    console.log('New contact form submission:', contactData);

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
