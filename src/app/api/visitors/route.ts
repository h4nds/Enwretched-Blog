import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('enwretched');
    const visitorsCollection = db.collection('visitors');

    // Get total visitor count
    const totalVisitors = await visitorsCollection.countDocuments();

    // Log new visitor
    await visitorsCollection.insertOne({
      timestamp: new Date(),
      userAgent: headers().get('user-agent') || 'unknown'
    });

    return NextResponse.json({ count: totalVisitors + 1 });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return NextResponse.json(
      { error: 'Failed to track visitor' },
      { status: 500 }
    );
  }
} 