import React from 'react';

export default function NewsTicker() {
  return (
    <div className="bg-theme-card border-y overflow-hidden [border-color:rgba(19,6,10,1)] touch-pan-y">
      <div className="animate-marquee whitespace-nowrap py-3">
        <span className="mx-6 text-theme-text-heading font-medium">Blog post is in the works yes yes</span>
        <span className="text-theme-text-muted">•</span>
        <span className="mx-6 text-theme-text-heading font-medium">Undergrad work will be added to the gallery soon!</span>
        <span className="text-theme-text-muted">•</span>
        <span className="mx-6 text-theme-text-heading font-medium">Forum well under construction</span>
        <span className="text-theme-text-muted">•</span>
        <span className="mx-6 text-theme-text-heading font-medium">5 New themes now available!</span>
      </div>
    </div>
  );
}
