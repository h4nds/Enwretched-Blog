import { NextResponse } from 'next/server';
import { headers, cookies } from 'next/headers';
import { getMongoClient } from '@/lib/mongodb';

const VISITED_COOKIE = 'enwretched_visited';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const alreadyVisited = cookieStore.has(VISITED_COOKIE);

    const client = await getMongoClient();
    if (!client) {
      return NextResponse.json({ count: 0 });
    }
    const db = client.db('enwretched');
    const visitorsCollection = db.collection('visitors');

    const totalVisitors = await visitorsCollection.countDocuments();

    if (!alreadyVisited) {
      const headersList = await headers();
      await visitorsCollection.insertOne({
        timestamp: new Date(),
        userAgent: headersList.get('user-agent') || 'unknown'
      });
      const response = NextResponse.json({ count: totalVisitors + 1 });
      response.cookies.set(VISITED_COOKIE, '1', {
        maxAge: COOKIE_MAX_AGE,
        sameSite: 'lax',
        path: '/',
      });
      return response;
    }

    return NextResponse.json({ count: totalVisitors });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return NextResponse.json({ count: 0 });
  }
} 