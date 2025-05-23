"use client";

import { blogPosts } from '@/data/blogPosts';
import BlogPost from './BlogPost';

export default function Blog() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-300 mb-8">Blog</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
} 