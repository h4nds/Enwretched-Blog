"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { splashConfig } from '@/config/splash';

export default function Splash() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in animation
    setIsVisible(true);

    // Handle keyboard press
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        router.push('/home');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [router]);

  const handleClick = () => {
    router.push('/home');
  };

  return (
    <div 
      className="min-h-screen bg-slate-950 flex items-center justify-center cursor-pointer relative overflow-hidden"
      onClick={handleClick}
    >
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full">
        {splashConfig.media.type === 'video' ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={splashConfig.media.fallbackUrl}
          >
            <source src={splashConfig.media.url} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={splashConfig.media.url}
            alt="Splash background"
            fill
            priority
            className="object-cover"
          />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div 
        className={`relative z-10 text-center transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-6xl font-bold text-purple-300 mb-4 animate-pulse">
          {splashConfig.title}
        </h1>
        <p className="text-purple-200 text-xl mb-8">
          {splashConfig.subtitle}
        </p>
        <div className="text-purple-200 text-sm animate-bounce">
          {splashConfig.prompt}
        </div>
      </div>
    </div>
  );
} 