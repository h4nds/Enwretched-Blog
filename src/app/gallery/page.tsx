import Header from '@/components/layout/Header';
import FeaturedArtwork from '@/components/features/FeaturedArtwork';
import { Artwork } from '@/types/artwork';

// This would eventually come from a database or API
const allArtworks: Artwork[] = [
  {
    id: '1',
    title: 'Follow The Notes',
    description: 'This surreal, dreamlike piece on a mysterious woman in white entering a reflective river, her spine-like laced in a cursed Tattoo suggesting transformation of self. The lush environment blends natural elements with modern touches like glowing windows and graffiti on ancient stones.',
    images: [
      {
        url: '/images/showcase/follow-the-notes.jpg',
        alt: 'Follow The Notes - Main View',
        isPrimary: true
      },
      {
        url: '/images/showcase/follow-the-notes-detail.jpg',
        alt: 'Follow The Notes - Detail View'
      },
      {
        url: '/images/showcase/follow-the-notes-process.jpg',
        alt: 'Follow The Notes - Process'
      }
    ],
    createdAt: '2024',
    tags: ['surreal', 'digital', 'nature']
  },
  {
    id: '2',
    title: 'Ten',
    description: 'Mixed media piece curated orginally from a photograph i took of the waterside of a river in the woods with my partner.',
    images: [
      {
        url: '/images/showcase/ten.jpg',
        alt: 'Ten - Main View',
        isPrimary: true
      },
      {
        url: '/images/showcase/ten-detail.jpg',
        alt: 'Ten - Detail View'
      }
    ],
    createdAt: '2024',
    tags: ['mixed-media', 'photography', 'nature']
  },
  {
    id: '3',
    title: '435 Hz',
    description: 'This piece explores the intensity and distortion of sensory overload—especially sound. I wanted to capture what it feels like to be immersed in heavy bass, noise, and movement, rather than just show it. The image centers around abstracted figures and bursts of color that feel like they\'re both forming and dissolving at the same time.',
    images: [
      {
        url: '/images/showcase/435-hz.jpg',
        alt: '435 Hz - Main View',
        isPrimary: true
      },
      {
        url: '/images/showcase/435-hz-detail.jpg',
        alt: '435 Hz - Detail View'
      },
      {
        url: '/images/showcase/435-hz-process.jpg',
        alt: '435 Hz - Process'
      }
    ],
    createdAt: '2025',
    tags: ['abstract', 'digital', 'experimental']
  },
  {
    id: '4',
    title: 'Recovery',
    description: 'This piece explores nature\'s quiet surrealism in untouched, mossy spaces that feel like portals. It captures a hidden spring deep in the forest, veiled in mist, with softened focus like a half-remembered dream.',
    images: [
      {
        url: '/images/showcase/recovery.jpg',
        alt: 'Recovery - Main View',
        isPrimary: true
      },
      {
        url: '/images/showcase/recovery-detail.jpg',
        alt: 'Recovery - Detail View'
      }
    ],
    createdAt: '2024',
    tags: ['nature', 'photography', 'surreal']
  },
  // Add more artworks here as you create them
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-slate-950 text-purple-200 font-mono">
      <Header />
      
      <main className="container mx-auto p-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-purple-300 mb-4">Gallery</h1>
          <p className="text-purple-200">Explore my complete collection of artworks, from digital pieces to photography and mixed media. Click on any artwork to view details and additional images.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allArtworks.map((artwork) => (
            <FeaturedArtwork key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </main>

      <footer className="border-t border-purple-900 p-4 mt-8 bg-black/90">
        <div className="container mx-auto text-center">
          <p>© EnWretched 2024 - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
} 