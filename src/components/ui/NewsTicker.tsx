import React from 'react';

export default function NewsTicker() {
  return (
    <div className="bg-theme-card border-y border-theme-border overflow-hidden">
      <div className="animate-marquee whitespace-nowrap py-3">
        <span className="mx-6 text-theme-text-heading font-medium">New blog post UP AND LIVE </span>
        <span className="text-theme-text-muted">•</span>
        <span className="mx-6 text-theme-text-heading font-medium">Check out the new Recovery Microsite</span>
        <span className="text-theme-text-muted">•</span>
        <span className="mx-6 text-theme-text-heading font-medium">HAPPY NEW YEARZ!!!!</span>
      </div>
    </div>
  );
} 