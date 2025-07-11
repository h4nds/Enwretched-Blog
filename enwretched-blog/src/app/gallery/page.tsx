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
    description: '',
    images: [
      {
        url: '/images/showcase/follow-the-notes.jpg',
        alt: 'Follow The Notes - Main View',
        isPrimary: true
      },
    ],
    createdAt: '2024',
    tags: ['surreal', 'digital', 'nature']
  },

  {
    id: '2',
    title: 'Ten',
    description: '',
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
    tags: ['mixed-media', 'photography', 'nature']
  },

  {
    id: '3',
    title: '435 Hz',
    description: '',
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
    tags: ['abstract', 'digital', 'experimental']
  },

  {
    id: '4',
    title: 'Recovery',
    description: '',
    images: [
      {
        url: '/images/showcase/recovery.jpg',
        alt: 'Recovery - Main View',
        isPrimary: true
      },
    ],
    createdAt: '2024',
    tags: ['nature', 'photography', 'surreal']
  },

  {
    id: '5',
    title: 'Alone',
    description: '',
    images: [
      {
        url: '/images/showcase/alone.jpg',
        alt: 'alone - Main View',
        isPrimary: true
      },
    ],
    createdAt: '2022',
    tags: ['nature', 'photography', 'surreal']
  },

  {
    id: '6',
    title: 'Airbrushed Castle',
    description: '',
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
    tags: ['Castle', 'photography', 'surreal']
  },

  {
    id: '7',
    title: 'Memory Collection',
    description: '',
    images: [
      {
        url: '/images/showcase/memory_gif.gif',
        alt: 'Airbrushed Castle - Main View',
        isPrimary: true
      },
      {
        url: '/images/showcase/memory.jpg',
        alt: 'Airbrushed Castle - Process'
      },
      {
        url: '/images/showcase/memory_paper1.jpg',
        alt: 'wallpaper'
      },
      {
        url: '/images/showcase/memory_paper2.png',
        alt: 'wallpaper'
      }
    ],
    createdAt: '2023',
    tags: ['Music', 'photography', 'Digital Desgin', 'Photoshop']
  },

  {
    id: '8',
    title: 'l appel du vide',
    description: 'Client Work ',
    images: [
      {
        url: '/images/showcase/tek_client.jpg',
        alt: 'Tekari Client Work - Ep cover',
        isPrimary: true
      },
      {
        url: '/images/showcase/Flash.png ',
        alt: 'Coverart - Process'
      },
    ],
    createdAt: '2023',
    tags: ['Client', 'photography', 'Illustration', 'Muisc']
  },

  {
    id: '9',
    title: 'TLC Remix',
    description: '',
    images: [
      {
        url: '/images/showcase/TLC_Remix.png',
        alt: 'Hero image - Main View',
        isPrimary: true
      },
      {
        url: '/images/showcase/TLC_solo.png ',
        alt: 'Straight Letter Appreciation - Process'
      },
    ],
    createdAt: '2022',
    tags: ['Personal', 'photography', 'Photoshop', 'Muisc']
  },

  {
    id: '10',
    title: 'Promethefall',
    description: 'A personal project',
    images: [
      {
        url: '/images/showcase/Promfall.jpg',
        alt: 'Main View',
        isPrimary: true
      },
      {
        url: '/images/showcase/Promfall2.png ',
        alt: '2nd View'
      },
      {
        url: '/images/showcase/Promfall3.png ',
        alt: '3rd View'
      }
    ],
    createdAt: '2025',
    tags: ['Personal', 'scene', 'Photoshop', 'Muisc']
  },

  {
    id: '11',
    title: 'Misery & Dior Official Coverart',
    description: 'Client Work for a late friend, Coverart for the album "Misery & Dior" by Ter99r ',
    images: [
      {
        url: '/images/showcase/mandd.png',
        alt: 'Official Coverart',
        isPrimary: true
      },
      {
        url: '/images/showcase/md tracklist.png ',
        alt: 'Offical Tracklist'
      },
    ],
    createdAt: '2022',
    tags: ['Client', 'Illustration', 'Muisc']
  },
  // Add more artworks here 
];

const ITEMS_PER_PAGE = 100; // or a number larger than your total artworks

export default function Gallery() {
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>(allArtworks);
  const [currentCategory, setCurrentCategory] = useState<'All' | 'Wallpapers'>('All');
  const [isGridView, setIsGridView] = useState(true);

  // Filter artworks by category
  useEffect(() => {
    if (currentCategory === 'All') {
      setFilteredArtworks(allArtworks);
    } else if (currentCategory === 'Wallpapers') {
      setFilteredArtworks(allArtworks.filter(a => a.tags && a.tags.map(t => t.toLowerCase()).includes('wallpaper')));
    }
  }, [currentCategory]);

  const currentArtworks = filteredArtworks; // show all

  return (
    <div className="min-h-screen bg-slate-950 text-purple-200 font-mono">
      <Header />
      <main className="container mx-auto p-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-purple-300 mb-4">Gallery</h1>
          <p className="text-purple-200">Explore my complete collection of artworks, from digital pieces to photography and mixed media. Click on any artwork to view details and additional images, please feel free to contact me for any Work more information.</p>
        </div>

        {/* Category Switcher */}
        <div className="flex gap-4 mb-6 justify-center">
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${currentCategory === 'All' ? 'bg-purple-700 text-white' : 'bg-purple-900/30 hover:bg-purple-900/50'}`}
            onClick={() => setCurrentCategory('All')}
          >
            All Artworks
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${currentCategory === 'Wallpapers' ? 'bg-purple-700 text-white' : 'bg-purple-900/30 hover:bg-purple-900/50'}`}
            onClick={() => setCurrentCategory('Wallpapers')}
          >
            Phone Wallpapers
          </button>
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

        {/* Pagination removed */}
      </main>

      <footer className="border-t border-purple-900 p-4 mt-8 bg-black/90">
        <div className="container mx-auto text-center">
          <p>©Ray Wretch 2024 - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
} 