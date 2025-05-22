"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
      className="min-h-screen bg-slate-950 flex items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
      <div 
        className={`text-center transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-6xl font-bold text-purple-300 mb-4 animate-pulse">
          EnWretched
        </h1>
        <p className="text-purple-200 text-xl mb-8">
          Enter the realm of digital art
        </p>
        <div className="text-purple-200 text-sm animate-bounce">
          Click or press Enter to continue
        </div>
      </div>
    </div>
  );
} 