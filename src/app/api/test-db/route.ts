import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    console.log('Attempting to connect to MongoDB...');
    const client = await clientPromise;
    console.log('MongoDB client connected successfully');
    
    const db = client.db('enwretched');
    console.log('Database selected:', db.databaseName);
    
    // Test the connection by listing collections
    const collections = await db.listCollections().toArray();
    console.log('Collections found:', collections.map(c => c.name));
    
    return NextResponse.json({ 
      status: 'success',
      message: 'Successfully connected to MongoDB',
      collections: collections.map(c => c.name)
    });
  } catch (error) {
    console.error('Detailed error:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Failed to connect to MongoDB',
        error: error instanceof Error ? {
          name: error.name,
          message: error.message,
          stack: error.stack
        } : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 