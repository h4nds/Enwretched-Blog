"use client";

import Header from '@/components/layout/Header';

export default function Forum() {
  return (
    <div className="min-h-screen bg-slate-950 text-purple-200 font-mono">
      <Header />
      
      <main className="relative min-h-[calc(100vh-4rem)]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/under-construction.jpg')" }}
        />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto p-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
          <h1 className="text-4xl font-bold text-purple-300 mb-4">Under Heavy Construction</h1>
          <p className="text-xl text-purple-200 text-center max-w-2xl">
            
          </p>
        </div>
      </main>

      <footer className="relative z-10 border-t border-purple-900 p-4 bg-black/90">
        <div className="container mx-auto text-center">
          <p>©Ray Wretch 2024 - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
} 