import { NextRequest, NextResponse } from 'next/server';
import { getMongoClient } from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
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

    const client = await getMongoClient();
    if (!client) {
      return NextResponse.json(
        { error: 'Newsletter signup is temporarily unavailable.' },
        { status: 503 }
      );
    }
    const db = client.db('enwretched');
    const newsletterCollection = db.collection('newsletter');
























    

    // Check if email already exists
    const existingSubscriber = await newsletterCollection.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'This email is already subscribed to our newsletter' },
        { status: 409 }
      );
    }

    const subscriberData = {
      email,
      subscribedAt: new Date(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      active: true
    };

    await newsletterCollection.insertOne(subscriberData);

    // Log subscription
    console.log('New newsletter subscription:', subscriberData);

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to our newsletter!' 
    });

  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
