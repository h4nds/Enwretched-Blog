import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts } from '@/data/blogPosts';
import { createPageMetadata } from '@/lib/seo';
import { absoluteUrl } from '@/constants/site';
import JsonLd from '@/components/seo/JsonLd';
import { createArticleSchema } from '@/components/seo/StructuredData';
import BlogArticleClient from './BlogArticleClient';

type PageProps = {
  params: { id: string };
};

function blogPostPath(id: string): string {
  return `/blog/${encodeURIComponent(id)}`;
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ id: post.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPost(params.id);
  if (!post) {
    return {};
  }

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: blogPostPath(post.id),
    image: post.imageUrl,
    type: 'article',
    publishedTime: post.createdAt,
    tags: post.tags,
  });
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost(params.id);
  if (!post) {
    notFound();
  }

  const articleSchema = createArticleSchema({
    title: post.title,
    description: post.excerpt,
    author: post.author,
    datePublished: post.createdAt,
    dateModified: post.createdAt,
    image: post.imageUrl ? absoluteUrl(post.imageUrl) : undefined,
    url: absoluteUrl(blogPostPath(post.id)),
  });

  return (
    <>
      <JsonLd data={articleSchema} />
      <BlogArticleClient post={post} />
    </>
  );
}
