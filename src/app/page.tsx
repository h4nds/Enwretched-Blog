import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'EnWretched - Digital Artist & Graphic Designer Portfolio',
  description: 'Explore the surreal and experimental artwork of Ray Wretch. Digital art, photography, and mixed media pieces that blend nature with dreamlike qualities. Professional graphic design and digital illustration portfolio.',
  keywords: ['digital art', 'graphic design', 'surreal art', 'photography', 'mixed media', 'portfolio', 'Ray Wretch', 'experimental art', 'digital illustration'],
  openGraph: {
    title: 'EnWretched - Digital Artist & Graphic Designer Portfolio',
    description: 'Explore the surreal and experimental artwork of Ray Wretch. Digital art, photography, and mixed media pieces.',
    images: [
      {
        url: '/images/showcase/follow-the-notes.jpg',
        width: 1200,
        height: 630,
        alt: 'Follow The Notes - Featured Artwork',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EnWretched - Digital Artist & Graphic Designer Portfolio',
    description: 'Explore the surreal and experimental artwork of Ray Wretch.',
    images: ['/images/showcase/follow-the-notes.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <HomeClient />;
}
