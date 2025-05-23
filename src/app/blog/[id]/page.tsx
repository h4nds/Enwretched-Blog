"use client";

import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getBlogPost } from '@/data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  const params = useParams();
  const post = getBlogPost(params.id as string);

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
    <div className="min-h-screen bg-slate-950 text-purple-200 font-mono">
      <Header />
      
      <main className="container mx-auto p-4">
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
              <div className="relative w-full aspect-video">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
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
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
} 