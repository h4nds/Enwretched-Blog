import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Ray Wretch - Digital Artist & Graphic Designer',
  description: 'Learn about Ray Wretch, a multidisciplinary digital artist and graphic designer specializing in surreal art, photography, and mixed media. Available for commissions and collaborations.',
  keywords: ['about', 'Ray Wretch', 'digital artist', 'graphic designer', 'photography', 'surreal art', 'commissions', 'portfolio'],
  openGraph: {
    title: 'About Ray Wretch - Digital Artist & Graphic Designer',
    description: 'Learn about Ray Wretch, a multidisciplinary digital artist and graphic designer specializing in surreal art, photography, and mixed media.',
    images: [
      {
        url: '/images/showcase/tek_client.jpg',
        width: 1200,
        height: 630,
        alt: 'Ray Wretch - Client Work Example',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ray Wretch - Digital Artist & Graphic Designer',
    description: 'Learn about Ray Wretch, a multidisciplinary digital artist and graphic designer specializing in surreal art, photography, and mixed media.',
    images: ['/images/showcase/tek_client.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  return <AboutClient />;
} 