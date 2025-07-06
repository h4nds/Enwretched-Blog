import { Metadata } from 'next';
import { getBlogPost } from '@/data/blogPosts';
import BlogPostClient from './BlogPostClient';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.id);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} - Blog`,
    description: post.content.substring(0, 160) + '...',
    keywords: [...post.tags, 'blog', 'digital art', 'Ray Wretch'],
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160) + '...',
      type: 'article',
      publishedTime: post.createdAt,
      authors: [post.author],
      images: post.imageUrl ? [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.content.substring(0, 160) + '...',
      images: post.imageUrl ? [post.imageUrl] : [],
    },
    alternates: {
      canonical: `/blog/${params.id}`,
    },
  };
}

export default function BlogPost({ params }: Props) {
  return <BlogPostClient id={params.id} />;
} 