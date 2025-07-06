import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog - Digital Art & Creative Process',
  description: 'Read about Ray Wretch\'s creative process, digital art techniques, and thoughts on surrealism and experimental art. Behind-the-scenes insights into artwork creation.',
  keywords: ['blog', 'digital art', 'creative process', 'surrealism', 'experimental art', 'art techniques', 'Ray Wretch'],
  openGraph: {
    title: 'Blog - Digital Art & Creative Process',
    description: 'Read about Ray Wretch\'s creative process, digital art techniques, and thoughts on surrealism and experimental art.',
    images: [
      {
        url: '/images/showcase/memory_gif.gif',
        width: 1200,
        height: 630,
        alt: 'Memory Collection - Featured Blog Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Digital Art & Creative Process',
    description: 'Read about Ray Wretch\'s creative process, digital art techniques, and thoughts on surrealism and experimental art.',
    images: ['/images/showcase/memory_gif.gif'],
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function Blog() {
  return <BlogClient />;
} 