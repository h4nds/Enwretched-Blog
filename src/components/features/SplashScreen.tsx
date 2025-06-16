"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (hasVisited) {
      // If not first visit, just show loading state
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 500);
      }, 2000); // Show loading for 2 seconds
      return () => clearTimeout(timer);
    } else {
      // If first visit, mark as visited
      localStorage.setItem('hasVisited', 'true');
    }

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleProceed();
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [onComplete]);

  const handleProceed = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleProceed}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleProceed()}
    >
      {/* Fallback background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/recovery.jpg"
          alt="Splash screen background"
          fill
          className="object-cover"
          priority
          onLoad={() => setIsLoading(false)}
        />
      </div>

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
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-purple-300 animate-pulse mb-12">
          EnWretched
        </h1>
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-300 rounded-full animate-bounce" />
            <div className="w-4 h-4 bg-purple-300 rounded-full animate-bounce delay-100" />
            <div className="w-4 h-4 bg-purple-300 rounded-full animate-bounce delay-200" />
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