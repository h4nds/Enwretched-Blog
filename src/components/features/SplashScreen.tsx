"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleProceed();
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    
    // Fallback: stop loading after 3 seconds if assets don't load
    const loadingTimeout = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 3000);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
      clearTimeout(loadingTimeout);
    };
  }, [onComplete, isLoading]);

  const handleProceed = useCallback(() => {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] transition-opacity duration-500"
      onClick={handleProceed}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleProceed()}
    >
      {/* Fallback background image */}
      {!imageError && (
        <div className="absolute inset-0">
          <Image
            src="/images/showcase/recovery.jpg"
            alt="Splash screen background"
            fill
            className="object-cover"
            priority
            onLoad={() => setIsLoading(false)}
            onError={() => {
              console.error('Background image failed to load');
              setImageError(true);
              setIsLoading(false);
            }}
          />
        </div>
      )}
      
      {/* Fallback gradient background when image fails */}
      {imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-950" />
      )}

      {/* Video overlay - only shown if video loads successfully */}
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            console.error('Video failed to load:', e);
            setVideoError(true);
          }}
          onLoadedData={() => setIsLoading(false)}
        >
          <source src="/Splash_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4">
        <h1 className="mb-8 max-w-full text-center text-4xl font-bold text-purple-300 animate-pulse min-[400px]:text-5xl md:mb-12 md:text-7xl lg:text-8xl">
          EnWretched
        </h1>
        {isLoading ? (
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-300 rounded-full animate-bounce" />
              <div className="w-4 h-4 bg-purple-300 rounded-full animate-bounce delay-100" />
              <div className="w-4 h-4 bg-purple-300 rounded-full animate-bounce delay-200" />
            </div>
            <p className="text-purple-200 text-sm">Loading...</p>
          </div>
        ) : (
          <p className="text-purple-200 text-lg animate-pulse">
            Click anywhere to enter
          </p>
        )}
      </div>
    </div>
  );
} 