import React from 'react';

export default function NewsTicker() {
  return (
    <div className="bg-theme-card border-y overflow-hidden [border-color:rgba(19,6,10,1)] touch-pan-y">
      <div className="animate-marquee whitespace-nowrap py-3">
        <span className="mx-6 text-theme-text-heading font-medium">Happy 1 year anniversary of the website!</span>
        <span className="text-theme-text-muted">•</span>
        <span className="mx-6 text-theme-text-heading font-medium">New Art work in the gallery!</span>
        <span className="text-theme-text-muted">•</span>
        <span className="mx-6 text-theme-text-heading font-medium">Forum well under hammer and nails</span>
        <span className="text-theme-text-muted">•</span>
        <span className="mx-6 text-theme-text-heading font-medium">Go read the blog man</span>
      </div>
    </div>
  );
}
