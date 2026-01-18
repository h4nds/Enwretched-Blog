import { MongoClient } from 'mongodb';

// Get MongoDB URI and ensure it's properly formatted
// Note: If your password contains special characters like #, @, :, /, ?, [, ], etc.,
// they should already be URL-encoded in the connection string
let uri = process.env.MONGODB_URI;

// If URI exists but appears to have unencoded special characters in password, log a warning
if (uri && uri.includes('://') && uri.includes('@')) {
  const match = uri.match(/:\/\/([^:]+):([^@]+)@/);
  if (match) {
    const password = match[2];
    // Check for common unencoded special characters that could cause issues
    if (password.includes('#') && !password.includes('%23')) {
      console.warn('Warning: MongoDB password contains # character. Make sure it is URL-encoded as %23 in the connection string.');
    }
  }
}

const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient> | undefined;

// Only create MongoDB connection if URI is provided
if (uri) {
  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      console.log('Creating new MongoDB client...');
      client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect()
        .then(client => {
          console.log('MongoDB client connected successfully');
          return client;
        })
        .catch(error => {
          console.error('MongoDB connection error:', error);
          throw error;
        });
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect()
      .then(client => {
        console.log('MongoDB client connected successfully');
        return client;
      })
      .catch(error => {
        console.error('MongoDB connection error:', error);
        throw error;
      });
  }
} else {
  // If no MongoDB URI is provided, create a promise that rejects with a helpful error
  console.warn('MongoDB URI not found. MongoDB features will be disabled. Add MONGODB_URI to .env.local to enable.');
  clientPromise = Promise.reject(new Error('MongoDB URI not configured. Please add MONGODB_URI to .env.local'));
}

export default clientPromise!; 