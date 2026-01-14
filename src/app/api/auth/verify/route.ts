import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

// Verify if user has valid session
export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('admin_session');

    if (!sessionToken) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    // In a real app, verify session token against database/Redis
    // For now, if cookie exists and hasn't expired, consider it valid
    // The cookie expiration is handled by the browser

    return NextResponse.json({
      authenticated: true
    });

  } catch (error) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }
}
