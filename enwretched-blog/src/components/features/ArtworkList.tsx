"use client";

import { Artwork } from '@/types/artwork';
import Image from 'next/image';

interface ArtworkListProps {
  artworks: Artwork[];
}

export default function ArtworkList({ artworks }: ArtworkListProps) {
  return (
    <div className="space-y-4">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="border border-purple-900 p-4 bg-slate-900/20 flex gap-4">
          <div className="relative w-32 h-32 flex-shrink-0">
            <Image
              src={artwork.images[0].url}
              alt={artwork.images[0].alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-purple-300 mb-2">{artwork.title}</h3>
            <p className="text-sm text-purple-200 mb-2 line-clamp-2">{artwork.description}</p>
            <div className="flex flex-wrap gap-2">
              {artwork.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-purple-900/30 text-purple-200 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-xs text-purple-400 mt-2">Created: {artwork.createdAt}</div>
          </div>
        </div>
      ))}
    </div>
  );
} 