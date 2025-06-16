"use client";

import { useState, useEffect } from 'react';

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const response = await fetch('/api/visitors');
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    };

    trackVisitor();
  }, []);

  return (
    <footer className="border-t border-purple-900 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="text-center">
          <p className="text-purple-200">© EnWretched 2025 - All Rights Reserved</p>
          <div className="mt-2">
            <span className="inline-block bg-purple-900 text-purple-100 px-3 py-1 rounded-full text-sm">
              Visitors: {visitorCount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
} 