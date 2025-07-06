import { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Art Gallery - Digital Art & Photography Portfolio',
  description: 'Browse Ray Wretch\'s complete collection of digital art, photography, and mixed media pieces. From surreal digital art to nature photography and experimental works.',
  keywords: ['art gallery', 'digital art', 'photography', 'mixed media', 'surreal art', 'portfolio', 'Ray Wretch', 'experimental art'],
  openGraph: {
    title: 'Art Gallery - Digital Art & Photography Portfolio',
    description: 'Browse Ray Wretch\'s complete collection of digital art, photography, and mixed media pieces.',
    images: [
      {
        url: '/images/showcase/435-hz.jpg',
        width: 1200,
        height: 630,
        alt: '435 Hz - Featured Artwork',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Art Gallery - Digital Art & Photography Portfolio',
    description: 'Browse Ray Wretch\'s complete collection of digital art, photography, and mixed media pieces.',
    images: ['/images/showcase/435-hz.jpg'],
  },
  alternates: {
    canonical: '/gallery',
  },
};

export default function Gallery() {
  return <GalleryClient />;
} 