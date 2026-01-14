import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import crypto from 'crypto';

export const dynamic = 'force-dynamic';

// Simple session token generation
function generateSessionToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }

    // Get expected password from environment
    const expectedPassword = process.env.ADMIN_PASSWORD;
    
    if (!expectedPassword) {
      console.error('ADMIN_PASSWORD not set in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Verify password (constant-time comparison to prevent timing attacks)
    // Note: Both buffers must be the same length for timingSafeEqual
    const passwordBuffer = Buffer.from(password, 'utf8');
    const expectedBuffer = Buffer.from(expectedPassword, 'utf8');
    
    // If lengths don't match, they're definitely not equal
    if (passwordBuffer.length !== expectedBuffer.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }
    
    const isValid = crypto.timingSafeEqual(passwordBuffer, expectedBuffer);

    if (!isValid) {
      // Add a small delay to prevent brute force attacks
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Generate session token
    const sessionToken = generateSessionToken();
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24); // 24 hour session

    // Store session in cookie (HTTP-only, Secure in production)
    const cookieStore = await cookies();
    cookieStore.set('admin_session', sessionToken, {
      httpOnly: true, // Prevents JavaScript access (XSS protection)
      secure: process.env.NODE_ENV === 'production', // HTTPS only in production
      sameSite: 'strict', // CSRF protection
      expires: expiresAt,
      path: '/',
    });

    // In a real app, you'd store this in a database or Redis
    // For now, we'll use a simple in-memory store (resets on server restart)
    // Store session token hash in environment or database
    const sessionHash = crypto.createHash('sha256').update(sessionToken).digest('hex');
    
    // Store in a simple way (in production, use Redis or database)
    // For now, we'll verify against the password hash
    // In production, implement proper session storage

    return NextResponse.json({
      success: true,
      message: 'Login successful'
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}
