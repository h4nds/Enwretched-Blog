"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FeaturedArtworkProps } from '@/types/artwork';
import { useState } from 'react';

export default function FeaturedArtwork({ artwork }: FeaturedArtworkProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ensure images array exists and has at least one image
  const images = artwork.images || [];
  const currentImage = images[currentImageIndex] || { url: '', alt: '' };

  // Check if this artwork has a dedicated page - Recovery artwork has id '4'
  const hasDedicatedPage = String(artwork.id) === '4';
  const artworkLink = hasDedicatedPage ? '/recovery' : null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = (e: React.MouseEvent) => {
    if (hasDedicatedPage && artworkLink) {
      e.preventDefault();
      e.stopPropagation();
      if (typeof window !== 'undefined') {
        router.push(artworkLink);
      }
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  const imageContent = (
    <div 
      className={`aspect-video relative mb-4 group ${
        hasDedicatedPage ? 'cursor-pointer' : 'cursor-pointer'
      }`}
      onClick={handleImageClick}
      role={hasDedicatedPage ? 'link' : 'button'}
      aria-label={hasDedicatedPage ? `View ${artwork.title} story` : 'Expand image'}
    >
        {isLoading && (
          <div className="absolute inset-0 bg-theme-accent-muted animate-pulse" />
        )}
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center bg-theme-accent-muted">
            <span className="text-theme-text-heading">Image not available</span>
          </div>
        ) : (
          <>
            <Image
              src={currentImage.url}
              alt={currentImage.alt}
              fill
              className={`object-cover transition-all duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              } group-hover:scale-105`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setError(true);
              }}
            />
            {images.length > 1 && (
              <div className="absolute bottom-2 right-2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-theme-accent' : 'bg-theme-accent-muted'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                  />
                ))}
              </div>
            )}
            <div className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center ${
              hasDedicatedPage 
                ? 'bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100' 
                : 'bg-black/50 opacity-0 group-hover:opacity-100'
            }`}>
              <span className="text-white text-sm font-medium bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                {hasDedicatedPage ? 'View Story →' : 'Click to expand'}
              </span>
            </div>
          </>
        )}
    </div>
  );

  return (
    <div className="border border-theme-border p-4 bg-theme-accent-muted">
      {imageContent}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          onClick={() => setIsExpanded(false)}
          style={{ zIndex: 9999 }}
        >
          <div 
            className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage.url}
              alt={currentImage.alt}
              width={800}
              height={600}
              className="object-contain max-w-full max-h-full"
              sizes="100vw"
            />
            {images.length > 1 && (
              <>
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-theme-text hover:text-theme-text-heading p-3 rounded-full bg-black/70 text-2xl font-bold"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  ←
                </button>
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-theme-text hover:text-theme-text-heading p-3 rounded-full bg-black/70 text-2xl font-bold"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  →
                </button>
              </>
            )}
            <button 
              className="absolute top-4 right-4 text-theme-text hover:text-theme-text-heading text-3xl font-bold p-2"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
      {hasDedicatedPage ? (
        <Link href={artworkLink!}>
          <h4 className="text-lg mb-2 text-theme-text-heading hover:text-theme-text transition-colors">{artwork.title}</h4>
          <p className="text-sm mb-2">{artwork.description}</p>
          <div className="text-xs">Created: {artwork.createdAt}</div>
        </Link>
      ) : (
        <>
          <h4 className="text-lg mb-2 text-theme-text-heading">{artwork.title}</h4>
          <p className="text-sm mb-2">{artwork.description}</p>
          <div className="text-xs">Created: {artwork.createdAt}</div>
        </>
      )}
    </div>
  );
} 