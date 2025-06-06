"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import FeaturedArtwork from '@/components/features/FeaturedArtwork';
import GalleryControls from '@/components/features/GalleryControls';
import ArtworkList from '@/components/features/ArtworkList';
import { Artwork } from '@/types/artwork';

// This would eventually come from a database or API Maybe - 4/26/2025**
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
    ],
    createdAt: '2024',
    tags: ['surreal', 'digital', 'nature'],
    category: 'professional'
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
        url: '/images/showcase/ten process.jpg',
        alt: 'Ten - Detail View'
      }
    ],
    createdAt: '2024',
    tags: ['mixed-media', 'photography', 'nature'],
    category: 'professional'
  },

  {
    id: '3',
    title: '435 Hz',
    description: 'This piece explores the intensity and distortion of sensory overload—especially sound. I wanted to capture what it feels like to be immersed in heavy bass, noise, and movement, rather than just show it.',
    images: [
      {
        url: '/images/showcase/435-hz.jpg',
        alt: '435 Hz - Main View',
        isPrimary: true
      },
      {
        url: '/images/showcase/435-hz process.jpg',
        alt: '435 Hz - Process'
      }
    ], 
    createdAt: '2025',
    tags: ['abstract', 'digital', 'experimental'],
    category: 'professional'
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
    ],
    createdAt: '2024',
    tags: ['nature', 'photography', 'surreal'],
    category: 'professional'
  },

  {
    id: '5',
    title: 'Alone',
    description: 'A study of solitude and introspection through nature photography.',
    images: [
      {
        url: '/images/showcase/alone.jpg',
        alt: 'alone - Main View',
        isPrimary: true
      },
    ],
    createdAt: '2022',
    tags: ['nature', 'photography', 'surreal'],
    category: 'undergraduate'
  },

  {
    id: '6',
    title: 'Airbrushed Castle',
    description: 'An experimental piece combining traditional airbrushing techniques with digital manipulation.',
    images: [
      {
        url: '/images/showcase/brushed castle.jpg',
        alt: 'Airbrushed Castle - Main View',
        isPrimary: true
      },
      {
        url: '/images/showcase/brushed castle process.jpg',
        alt: 'Airbrushed Castle - Process'
      },
      {
        url: '/images/showcase/CASTLES WALLPAPER.jpg',
        alt: 'wallpaper'
      }
    ],
    createdAt: '2022',
    tags: ['Castle', 'photography', 'surreal'],
    category: 'undergraduate'
  },

  {
    id: '7',
    title: 'Memory Collection',
    description: 'A digital exploration of memory and nostalgia through layered imagery.',
    images: [
      {
        url: '/images/showcase/memory_gif.gif',
        alt: 'Memory Collection - Main View',
        isPrimary: true
      },
      {
        url: '/images/showcase/memory.jpg',
        alt: 'Memory Collection - Process'
      },
      {
        url: '/images/showcase/memory_paper1.jpg',
        alt: 'Memory Collection - Paper 1'
      },
      {
        url: '/images/showcase/memory_paper2.png',
        alt: 'Memory Collection - Paper 2'
      }
    ],
    createdAt: '2023',
    tags: ['Music', 'photography', 'Digital Design', 'Photoshop'],
    category: 'undergraduate'
  },

  {
    id: '8',
    title: 'l appel du vide',
    description: 'Client work for a music artist, exploring themes of emptiness and longing.',
    images: [
      {
        url: '/images/showcase/tek_client.jpg',
        alt: 'Tekari Client Work - Ep cover',
        isPrimary: true
      },
      {
        url: '/images/showcase/Flash.png',
        alt: 'Coverart - Process'
      },
    ],
    createdAt: '2023',
    tags: ['Client', 'photography', 'Illustration', 'Music'],
    category: 'professional'
  },

  {
    id: '9',
    title: 'TLC Remix',
    description: 'A personal project reimagining classic album artwork through a contemporary lens.',
    images: [
      {
        url: '/images/showcase/TLC_Remix.png',
        alt: 'TLC Remix - Main View',
        isPrimary: true
      },
      {
        url: '/images/showcase/TLC_solo.png',
        alt: 'TLC Remix - Solo View'
      },
    ],
    createdAt: '2022',
    tags: ['Personal', 'photography', 'Photoshop', 'Music'],
    category: 'personal'
  },

  {
    id: '10',
    title: 'Color Theory Study',
    description: 'An undergraduate exploration of color relationships and their emotional impact.',
    images: [
      {
        url: '/images/showcase/color-theory.jpg',
        alt: 'Color Theory Study - Main View',
        isPrimary: true
      }
    ],
    createdAt: '2021',
    tags: ['color', 'study', 'undergraduate'],
    category: 'undergraduate'
  },

  {
    id: '11',
    title: 'Form and Space',
    description: 'A study of negative space and geometric forms in architectural photography.',
    images: [
      {
        url: '/images/showcase/form-space.jpg',
        alt: 'Form and Space - Main View',
        isPrimary: true
      }
    ],
    createdAt: '2021',
    tags: ['architecture', 'photography', 'undergraduate'],
    category: 'undergraduate'
  },

  {
    id: '12',
    title: 'Digital Collage Series',
    description: 'A series of digital collages exploring the relationship between organic and geometric forms.',
    images: [
      {
        url: '/images/showcase/digital-collage.jpg',
        alt: 'Digital Collage Series - Main View',
        isPrimary: true
      }
    ],
    createdAt: '2021',
    tags: ['digital', 'collage', 'undergraduate'],
    category: 'undergraduate'
  }
];

const ITEMS_PER_PAGE = 6;

export default function Gallery() {
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>(allArtworks);
  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(true);

  // Calculate pagination add values to notion per page 
  const totalPages = Math.ceil(filteredArtworks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentArtworks = filteredArtworks.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredArtworks]);

  return (
    <div className="min-h-screen bg-slate-950 text-purple-200 font-mono">
      <Header />
      
      <main className="container mx-auto p-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-purple-300 mb-4">Gallery</h1>
          <p className="text-purple-200">Explore my complete collection of artworks, from digital pieces to photography and mixed media. Click on any artwork to view details and additional images, please feel free to contact me for any Work more information. *Still Adding*</p>
        </div>

        <GalleryControls 
          artworks={allArtworks}
          onFilterChange={setFilteredArtworks}
          isGridView={isGridView}
          onViewChange={setIsGridView}
        />

        {isGridView ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArtworks.map((artwork) => (
              <FeaturedArtwork key={artwork.id} artwork={artwork} />
            ))}
          </div>
        ) : (
          <ArtworkList artworks={currentArtworks} />
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-purple-900/30 hover:bg-purple-900/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-purple-200">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-purple-900/30 hover:bg-purple-900/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </main>

      <footer className="border-t border-purple-900 p-4 mt-8 bg-black/90">
        <div className="container mx-auto text-center">
          <p>©Ray Wretch 2024 - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
} 