"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleProceed();
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

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
    >
      <div className="relative w-full h-full">
        {/* Fallback background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/recovery.jpg"
            alt="Splash screen background"
            fill
            className="object-cover"
            priority
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
          <button
            onClick={handleProceed}
            className="px-8 py-3 bg-purple-900/50 hover:bg-purple-900/70 text-purple-200 rounded-lg transition-colors duration-200 border border-purple-700 text-lg"
          >
            Enter Site
          </button>
          <p className="mt-6 text-purple-200 text-base">
            Press Enter or click to continue
          </p>
        </div>
      </div>
    </div>
  );
} 