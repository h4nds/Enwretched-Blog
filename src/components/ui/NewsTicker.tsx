import React from 'react';

export default function NewsTicker() {
  return (
    <div className="bg-black/80 border-y border-purple-900/50 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap py-3">
        <span className="mx-6 text-purple-100 font-medium">New blog post now live for reading!</span>
        <span className="text-purple-500">•</span>
        <span className="mx-6 text-purple-100 font-medium">Check out the new Recovery Microsite</span>
        <span className="text-purple-500">•</span>
        <span className="mx-6 text-purple-100 font-medium">New Solo Project in the works</span>
      </div>
    </div>
  );
} 