import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

/**
 * Verify if the request has a valid admin session
 * Returns true if authenticated, false otherwise
 */
export async function verifyAdminSession(request?: NextRequest): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('admin_session');

    if (!sessionToken) {
      return false;
    }

    // In a production app, you'd verify the session token against a database/Redis
    // For now, if the cookie exists and hasn't expired, consider it valid
    // The cookie expiration is handled by the browser and server
    
    // You could also verify the session token format/validity here
    return true;
  } catch (error) {
    console.error('Error verifying session:', error);
    return false;
  }
}

/**
 * Rate limiting helper (simple in-memory store)
 * In production, use Redis or a proper rate limiting service
 */
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowMs: number = 15 * 60 * 1000 // 15 minutes
): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  if (!record || now > record.resetTime) {
    // Create new record
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + windowMs
    });
    return true;
  }

  if (record.count >= maxRequests) {
    return false; // Rate limit exceeded
  }

  // Increment count
  record.count++;
  return true;
}

// Clean up old rate limit records periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 60 * 1000); // Clean up every minute
