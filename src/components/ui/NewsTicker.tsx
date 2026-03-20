import React from 'react';

export default function NewsTicker() {
  return (
    <div className="bg-theme-card border-y border-theme-border overflow-hidden">
      <div className="animate-marquee whitespace-nowrap py-3">
        <span className="mx-6 text-theme-text-heading font-medium">Blog post is in the works yes</span>
        <span className="text-theme-text-muted">•</span>
        <span className="mx-6 text-theme-text-heading font-medium">Student art work will be added to the gallery soon!</span>
        <span className="text-theme-text-muted">•</span>
        <span className="mx-6 text-theme-text-heading font-medium">New Themes now Available!</span>
      </div>
    </div>
  );
} 