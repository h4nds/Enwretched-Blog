"use client";

import Image from 'next/image';
import { FeaturedArtworkProps } from '@/types/artwork';
import { useState } from 'react';

export default function FeaturedArtwork({ artwork }: FeaturedArtworkProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ensure images array exists and has at least one image
  const images = artwork.images || [];
  const currentImage = images[currentImageIndex] || { url: '', alt: '' };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="border border-purple-900 p-4 bg-slate-900/20">
      <div 
        className="aspect-video relative mb-4 cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isLoading && (
          <div className="absolute inset-0 bg-purple-900/20 animate-pulse" />
        )}
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center bg-purple-900/20">
            <span className="text-purple-300">Image not available</span>
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
                      index === currentImageIndex ? 'bg-purple-300' : 'bg-purple-900'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                  />
                ))}
              </div>
            )}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-purple-200 text-sm">Click to expand</span>
            </div>
          </>
        )}
      </div>
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsExpanded(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <Image
              src={currentImage.url}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            {images.length > 1 && (
              <>
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-200 hover:text-purple-100 p-2 rounded-full bg-black/50"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  ←
                </button>
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-200 hover:text-purple-100 p-2 rounded-full bg-black/50"
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
              className="absolute top-4 right-4 text-purple-200 hover:text-purple-100"
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
      <h4 className="text-lg mb-2 text-purple-300">{artwork.title}</h4>
      <p className="text-sm mb-2">{artwork.description}</p>
      <div className="text-xs">Created: {artwork.createdAt}</div>
    </div>
  );
} 