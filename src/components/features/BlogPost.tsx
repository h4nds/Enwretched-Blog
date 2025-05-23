"use client";

import { BlogPost as BlogPostType } from '@/types/blog';
import Image from 'next/image';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="border border-purple-900 p-4 rounded-lg hover:bg-purple-900/20 transition-colors duration-200">
      {post.imageUrl && (
        <div className="relative w-full h-48 mb-4">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <h4 className="text-purple-300 mb-2">{post.title}</h4>
      <p className="text-sm text-purple-200 mb-4">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map(tag => (
          <span key={tag} className="bg-purple-900/30 text-purple-200 px-2 py-1 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center text-xs text-purple-400">
        <span>By {post.author}</span>
        <span>{post.createdAt}</span>
      </div>
    </div>
  );
} 