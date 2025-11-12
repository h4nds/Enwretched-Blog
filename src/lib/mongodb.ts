import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
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