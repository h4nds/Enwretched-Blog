"use client";

import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getBlogPost } from '@/data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';
import { JSX, useState } from 'react';
import VideoPlayer from '@/components/features/VideoPlayer';

export default function BlogPost() {
  const params = useParams();
  const post = getBlogPost(params.id as string);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 text-purple-200 font-mono">
        <Header />
        <main className="container mx-auto p-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-purple-300 mb-4">Post Not Found</h1>
            <Link href="/blog" className="text-purple-200 hover:text-purple-100">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }


  return (
    <div key={post.id} className="min-h-screen bg-slate-950 text-purple-200 font-mono">
      <Header />
      
      <main className="container mx-auto p-4 mb-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-purple-200 hover:text-purple-100 mb-8 inline-block">
            ← Back to Blog
          </Link>

          <article className="space-y-6">
            <header className="space-y-4">
              <h1 className="text-4xl font-bold text-purple-300">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-purple-400">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{post.createdAt}</span>
              </div>
            </header>

            {post.imageUrl && (
              <div className="relative w-full aspect-[4/3] p-4 rounded-lg">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 768px, 1024px"
                  priority
                  onError={(e) => {
                    console.error('Error loading image:', e);
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully');
                  }}
                />
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-sm"> 
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="text-lg text-purple-200 leading-relaxed">
                {post.content.split('\n').map((line, index) => {
                  // Check if line contains markdown image syntax
                  const imageMatch = line.trim().match(/!\[([^\]]*)\]\(([^)]+)\)/);
                  if (imageMatch) {
                    const [, alt, src] = imageMatch;
                    return (
                      <div key={index} className="my-8 flex flex-col items-center">
                        <div 
                          className="cursor-pointer group relative"
                          onClick={() => setExpandedImage(src)}
                        >
                          <Image
                            src={src}
                            alt={alt}
                            width={800}
                            height={600}
                            className="w-full max-w-4xl h-auto rounded-lg object-contain shadow-lg transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                            <span className="text-white text-sm bg-black/50 px-3 py-1 rounded">Click to expand</span>
                          </div>
                        </div>
                        {alt && alt.trim() && (
                          <p className="text-sm text-purple-300 mt-3 text-center max-w-2xl italic">
                            {alt}
                          </p>
                        )}
                      </div>
                    );
                  }
                  // Regular text line - parse markdown links [text](url)
                  if (line.trim()) {
                    const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
                    const parts: (string | JSX.Element)[] = [];
                    let lastIndex = 0;
                    let match;
                    while ((match = linkRegex.exec(line)) !== null) {
                      parts.push(line.slice(lastIndex, match.index));
                      parts.push(
                        <a
                          key={`${index}-${match.index}`}
                          href={match[2]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-300 underline hover:text-purple-100"
                        >
                          {match[1]}
                        </a>
                      );
                      lastIndex = linkRegex.lastIndex;
                    }
                    parts.push(line.slice(lastIndex));
                    return (
                      <p key={index} className="mb-4">
                        {parts}
                      </p>
                    );
                  }
                  // Empty line - add spacing
                  return <div key={index} className="h-4" />;
                })}
              </div>
            </div>

            {/* Video Player - Only show for the Deployment post */}
            {post.id === '2025-16-06-new-digital-piece' && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-purple-300 mb-4">Some shred</h2>
                <VideoPlayer 
                  src="/videos/shred1.mp4"
                  title="heres some shred"
                />
                <p className="text-sm text-purple-400 mt-2 italic">song: xaviersobased - dancer</p>
              </div>
            )}
          </article>
        </div>
      </main>

      {/* Image Expansion Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
          style={{ zIndex: 9999 }}
        >
          <div 
            className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={expandedImage}
              alt="Expanded view"
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-full rounded-lg"
              sizes="100vw"
            />
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl font-bold p-2 bg-black/50 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedImage(null);
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