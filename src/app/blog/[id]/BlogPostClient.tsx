"use client";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getBlogPost } from '@/data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';
import VideoPlayer from '@/components/features/VideoPlayer';
import StructuredData, { createArticleSchema } from '@/components/seo/StructuredData';

interface Props {
  id: string;
}

export default function BlogPostClient({ id }: Props) {
  const post = getBlogPost(id);

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

  // Structured data for the blog post
  const articleSchema = createArticleSchema({
    title: post.title,
    description: post.content.substring(0, 160) + '...',
    author: post.author,
    datePublished: post.createdAt,
    dateModified: post.createdAt,
    image: post.imageUrl ? `https://enwretched.com${post.imageUrl}` : undefined,
    url: `https://enwretched.com/blog/${id}`,
  });

  return (
    <div className="min-h-screen bg-slate-950 text-purple-200 font-mono">
      <StructuredData data={articleSchema} />
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
              <p className="text-lg text-purple-200 leading-relaxed whitespace-pre-line">
                {post.content}
              </p>
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

      <Footer />
    </div>
  );
} 