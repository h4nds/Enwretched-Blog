"use client";

import Image from 'next/image';
import { FeaturedArtworkProps } from '@/types/artwork';
import { useState } from 'react';

export default function FeaturedArtwork({ artwork }: FeaturedArtworkProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="border border-purple-900 p-4 bg-slate-900/20">
      <div className="aspect-video relative mb-4">
        {isLoading && (
          <div className="absolute inset-0 bg-purple-900/20 animate-pulse" />
        )}
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center bg-purple-900/20">
            <span className="text-purple-300">Image not available</span>
          </div>
        ) : (
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            fill
            className={`object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setError(true);
            }}
          />
        )}
      </div>
      <h4 className="text-lg mb-2 text-purple-300">{artwork.title}</h4>
      <p className="text-sm mb-2">{artwork.description}</p>
      <div className="text-xs">Created: {artwork.createdAt}</div>
    </div>
  );
} 