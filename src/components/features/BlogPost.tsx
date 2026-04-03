"use client";

import { BlogPost as BlogPostType } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <Link href={`/blog/${post.id}`} className="block">
      <div className="border border-theme-border p-4 rounded-lg hover:bg-theme-accent-muted transition-colors duration-200">
        {post.imageUrl && (
          <div className="relative w-full aspect-[4/3] p-4 rounded-lg mb-4">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <h3 className="text-theme-text-heading mb-2">{post.title}</h3>
        <p className="text-sm text-theme-text mb-4">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
            <span key={tag} className="bg-theme-accent-muted text-theme-text px-2 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center text-xs text-theme-text-muted">
          <span>By {post.author}</span>
          <span>{post.createdAt}</span>
        </div>
      </div>
    </Link>
  );
} 