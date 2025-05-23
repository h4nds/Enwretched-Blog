"use client";

import { useState } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-20"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {/* Invisible trigger area */}
      <div className="h-24" />
      
      {/* Footer */}
      <div 
        className="transition-all duration-500 ease-in-out"
        style={{ 
          transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
          opacity: isVisible ? 1 : 0
        }}
      >
        <div className="border-t border-purple-900 p-4 bg-black/90 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <p>© EnWretched 2025 - All Rights Reserved</p>
            <div className="mt-2">
              <span className="inline-block bg-purple-900 text-purple-100 px-2 rounded">Visitors: 0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 