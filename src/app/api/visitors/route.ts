import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import clientPromise from '@/lib/mongodb';

// Simple in-memory rate limiting
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10; // 10 requests per minute
const ipRequests = new Map<string, { count: number; timestamp: number }>();

export async function GET() {
  try {
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for') || 'unknown';
    const now = Date.now();

    // Check rate limit
    const requestData = ipRequests.get(ip);
    if (requestData) {
      if (now - requestData.timestamp < RATE_LIMIT_WINDOW) {
        if (requestData.count >= MAX_REQUESTS) {
          return NextResponse.json(
            { error: 'Too many requests' },
            { status: 429 }
          );
        }
        requestData.count++;
      } else {
        ipRequests.set(ip, { count: 1, timestamp: now });
      }
    } else {
      ipRequests.set(ip, { count: 1, timestamp: now });
    }

    const client = await clientPromise;
    const db = client.db('enwretched');
    const visitorsCollection = db.collection('visitors');

    // Get total visitor count
    const totalVisitors = await visitorsCollection.countDocuments();

    // Log new visitor
    await visitorsCollection.insertOne({
      timestamp: new Date(),
      userAgent: headersList.get('user-agent') || 'unknown',
      ip: ip
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