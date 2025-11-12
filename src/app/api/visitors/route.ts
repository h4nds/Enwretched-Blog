import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import clientPromise from '@/lib/mongodb';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const headersList = await headers();
    const client = await clientPromise;
    const db = client.db('enwretched');
    const visitorsCollection = db.collection('visitors');

    // Get total visitor count
    const totalVisitors = await visitorsCollection.countDocuments();

    // Log new visitor
    await visitorsCollection.insertOne({
      timestamp: new Date(),
      userAgent: headersList.get('user-agent') || 'unknown'
    });

    return NextResponse.json({ count: totalVisitors + 1 });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    // Return a default count of 0 if MongoDB fails, so the site still works
    return NextResponse.json({ count: 0 });
  }
} 