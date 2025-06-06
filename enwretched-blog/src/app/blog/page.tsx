"use client";

import Header from '@/components/layout/Header';
import BlogPost from '@/components/features/BlogPost';
import Footer from '@/components/layout/Footer';
import { blogPosts } from '@/data/blogPosts';

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-950 text-purple-200 font-mono">
      <Header />
      
      <main className="container mx-auto p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-purple-300 mb-8">Blog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 