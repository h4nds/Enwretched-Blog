"use client";

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function RecoveryPage() {
  const [expandedImage, setExpandedImage] = useState(false);

  const artwork = {
    title: 'Recovery',
    year: '2024',
    tags: ['nature', 'photography', 'surreal', 'photoshop'],
    category: 'professional',
    imageUrl: '/images/showcase/recovery.jpg',
    description: 'This piece explores nature\'s quiet surrealism in untouched, mossy spaces that feel like portals. It captures a hidden spring deep in the forest, veiled in mist, with softened focus like a half-remembered dream.'
  };

  // Placeholder story content - user will provide actual content
  const storyContent = `
    [Your story about Recovery will go here. This is a placeholder for the narrative about how the artwork was made and the story behind the work.]
  `.trim();

  return (
    <div className="min-h-screen bg-slate-950 text-purple-200 font-mono">
      <Header />
      
      <main className="container mx-auto px-4 py-8 mb-16">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Back Link */}
          <Link 
            href="/gallery" 
            className="inline-flex items-center gap-2 text-purple-200 hover:text-purple-100 transition-colors duration-200 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
            <span>Back to Gallery</span>
          </Link>

          {/* Hero Image Section - Glassmorphism Card */}
          <div className="relative w-full rounded-2xl overflow-hidden">
            <div className="backdrop-blur-xl bg-slate-900/30 border border-purple-900/30 rounded-2xl p-6 shadow-2xl">
              <div 
                className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setExpandedImage(true)}
              >
                <Image
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                    Click to expand
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Metadata Section - Transparent Card */}
          <div className="backdrop-blur-xl bg-slate-900/30 border border-purple-900/30 rounded-2xl p-6 shadow-xl">
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-purple-300 mb-2 bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">
                  {artwork.title}
                </h1>
                <p className="text-purple-400 text-sm">{artwork.year}</p>
              </div>

              <p className="text-purple-200 leading-relaxed text-lg">
                {artwork.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {artwork.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="backdrop-blur-sm bg-purple-900/40 border border-purple-800/30 text-purple-200 px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Story Section - Transparent Card */}
          <div className="backdrop-blur-xl bg-slate-900/30 border border-purple-900/30 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6">
              The Story Behind Recovery
            </h2>
            <div className="prose prose-invert max-w-none">
              <div className="text-purple-200 leading-relaxed space-y-4 text-lg">
                {storyContent.split('\n').map((line, index) => {
                  if (line.trim()) {
                    return (
                      <p key={index} className="mb-4">
                        {line}
                      </p>
                    );
                  }
                  return <div key={index} className="h-4" />;
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Image Expansion Modal - Glassmorphism Backdrop */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
          onClick={() => setExpandedImage(false)}
          style={{ zIndex: 9999 }}
        >
          <div 
            className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="backdrop-blur-xl bg-slate-900/20 border border-purple-900/20 rounded-2xl p-4 shadow-2xl">
              <Image
                src={artwork.imageUrl}
                alt={artwork.title}
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-[85vh] rounded-lg"
                sizes="100vw"
              />
            </div>
            <button 
              className="absolute top-4 right-4 text-purple-200 hover:text-purple-100 text-3xl font-bold p-3 backdrop-blur-sm bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedImage(false);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

