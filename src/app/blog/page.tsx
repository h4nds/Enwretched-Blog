"use client";

import Header from '@/components/layout/Header';
import BlogPost from '@/components/features/BlogPost';
import { BlogPost as BlogPostType } from '@/types/blog';

// This would eventually come from a database or API
const allBlogPosts: BlogPostType[] = [
  {
    id: '1',
    title: 'The Intersection of Digital Art and Nature',
    content: 'Full blog post content here...',
    excerpt: 'Exploring how digital tools can enhance our connection with natural elements in art...',
    createdAt: '2024-03-15',
    tags: ['Digital Art', 'Nature', 'Process'],
    author: 'Ray Wretch',
    imageUrl: '/images/showcase/follow-the-notes.jpg'
  },
  // Add more blog posts here
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-950 text-purple-200 font-mono">
      <Header />
      
      <main className="container mx-auto p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-purple-300 mb-8">Blog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBlogPosts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-purple-900 p-4 mt-8 bg-black/90">
        <div className="container mx-auto text-center">
          <p>© EnWretched 2025 - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
} 