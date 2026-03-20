"use client";

import { useState, useEffect } from 'react';

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const response = await fetch('/api/visitors');
        const data = await response.json();
        // Safely handle the response - check if count exists and is a number
        if (data && typeof data.count === 'number') {
          setVisitorCount(data.count);
        } else {
          // If API returns error or no count, just show 0
          setVisitorCount(0);
        }
      } catch (error) {
        console.error('Error tracking visitor:', error);
        // On error, set to 0 instead of leaving undefined
        setVisitorCount(0);
      }
    };

    trackVisitor();
  }, []);

  return (
    <footer className="border-t border-theme-border bg-theme-card backdrop-blur-sm">
      <div className="container mx-auto max-w-full px-3 py-4 sm:px-4">
        <div className="text-center">
          <p className="text-theme-text">© EnWretched 2025 - All Rights Reserved</p>
          <div className="mt-2">
            <span className="inline-block bg-theme-accent-muted text-theme-text-heading px-3 py-1 rounded-full text-sm transition-all duration-500">
              visitors: {(visitorCount ?? 0).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
} 