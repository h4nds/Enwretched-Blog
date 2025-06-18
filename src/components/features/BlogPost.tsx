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
      <div className="border border-purple-900 p-4 rounded-lg hover:bg-purple-900/20 transition-colors duration-200">
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
    </Link>
  );
} 