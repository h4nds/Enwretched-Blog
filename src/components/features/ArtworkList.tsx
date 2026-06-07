"use client";

import { Artwork } from '@/types/artwork';
import { normalizeImageSrc } from '@/lib/imagePath';
import Image from 'next/image';
import Link from 'next/link';

interface ArtworkListProps {
  artworks: Artwork[];
}

export default function ArtworkList({ artworks }: ArtworkListProps) {
  return (
    <div className="space-y-4">
      {artworks.map((artwork) => {
        // Check if this artwork has a dedicated page - Recovery artwork has id '4'
        const hasDedicatedPage = String(artwork.id) === '4';
        const artworkLink = hasDedicatedPage ? '/recovery' : null;

        const content = (
          <>
            <div className={`relative w-32 h-32 flex-shrink-0 ${hasDedicatedPage ? 'group overflow-hidden rounded' : ''}`}>
              <Image
                src={normalizeImageSrc(artwork.images[0].url)}
                alt={artwork.images[0].alt}
                fill
                className={`object-cover ${hasDedicatedPage ? 'group-hover:scale-110 transition-transform duration-300' : ''}`}
              />
              {hasDedicatedPage && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="text-white text-xs font-medium">View Story</span>
                </div>
              )}
            </div>
            <div className="flex-grow">
              <h3 className={`text-xl font-bold text-theme-text-heading mb-2 ${hasDedicatedPage ? 'hover:text-theme-text transition-colors' : ''}`}>
                {artwork.title}
              </h3>
              <p className="text-sm text-theme-text mb-2 line-clamp-2">{artwork.description}</p>
              <div className="flex flex-wrap gap-2">
                {artwork.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-theme-accent-muted text-theme-text rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-xs text-theme-text-muted mt-2">Created: {artwork.createdAt}</div>
            </div>
          </>
        );

        if (hasDedicatedPage && artworkLink) {
          return (
            <Link 
              key={artwork.id}
              href={artworkLink}
              className="block border border-theme-border p-4 bg-theme-accent-muted flex gap-4 cursor-pointer hover:bg-theme-card-hover transition-all duration-200 no-underline"
            >
              {content}
            </Link>
          );
        }

        return (
          <div 
            key={artwork.id}
            className="border border-theme-border p-4 bg-theme-accent-muted flex gap-4"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
} 