"use client";

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/features/Hero';
import About from '@/components/features/About';
import Blog from '@/components/features/Blog';
import SplashScreen from '@/components/features/SplashScreen';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-purple-200 font-mono">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Header />
      <main>
        <Hero />
        <About />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
