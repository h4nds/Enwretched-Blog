import Header from '@/components/layout/Header';
import NewsTicker from '@/components/ui/NewsTicker';
import FeaturedArtwork from '@/components/features/FeaturedArtwork';
import { Artwork } from '@/types/artwork';
import Link from 'next/link';

const featuredArtworks: Artwork[] = [
  {
    id: '1',
    title: 'Follow The Notes',
    description: 'This surreal, dreamlike piece on a mysterious woman in white entering a reflective river, her spine-like laced in a cursed Tattoo suggesting transformation of self. The lush environment blends natural elements with modern touches like glowing windows and graffiti on ancient stones.',
    imageUrl: '/images/showcase/follow-the-notes.jpg',
    createdAt: '2024',
    tags: ['surreal', 'digital', 'nature']
  },
  {
    id: '2',
    title: 'Ten',
    description: 'Mixed media piece curated orginally from a photograph i took of the waterside of a river in the woods with my partner.',
    imageUrl: '/images/showcase/ten.jpg',
    createdAt: '2024',
    tags: ['mixed-media', 'photography', 'nature']
  },
  {
    id: '3',
    title: '435 Hz',
    description: 'This piece explores the intensity and distortion of sensory overload—especially sound. I wanted to capture what it feels like to be immersed in heavy bass, noise, and movement, rather than just show it. The image centers around abstracted figures and bursts of color that feel like they\'re both forming and dissolving at the same time.',
    imageUrl: '/images/showcase/435-hz.jpg',
    createdAt: '2025',
    tags: ['abstract', 'digital', 'experimental']
  },
  {
    id: '4',
    title: 'Recovery',
    description: 'This piece explores nature\'s quiet surrealism in untouched, mossy spaces that feel like portals. It captures a hidden spring deep in the forest, veiled in mist, with softened focus like a half-remembered dream.',
    imageUrl: '/images/showcase/recovery.jpg',
    createdAt: '2024',
    tags: ['nature', 'photography', 'surreal']
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-purple-200 font-mono">
      <Header />
      <NewsTicker />

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Welcome section */}
          <div className="md:col-span-2 border border-purple-900 p-6 bg-black/90">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl mb-2 text-purple-300">Welcome to My Art Space</h2>
                <p className="text-purple-200 leading-relaxed">
                  Exploring the intersection of digital art, photography, and mixed media. Each piece tells a story of transformation, nature, and the surreal.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-purple-900 p-3 rounded-lg bg-purple-900/20">
                  <h3 className="text-purple-300 mb-2">Current Focus</h3>
                  <ul className="space-y-2 text-sm text-purple-200">
                    <li>• Surreal Digital Art</li>
                    <li>• Nature Photography</li>
                    <li>• Mixed Media</li>
                    <li>• Experimental Pieces</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {/* little blobs and tags + badges */}
                <span className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-sm">Raster & Vector</span>
                <span className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-sm">Photography</span>
                <span className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-sm">Mixed Media</span>
                <span className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-sm">Surreallism</span>
                <span className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-sm">Nature</span>
                <span className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-sm">Experimentalism</span>
              </div>

              <div className="bg-purple-900/30 border border-purple-900 p-3 rounded-lg">
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex items-center gap-2 text-purple-200">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span>0 Online</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-200">
                    <span>📊</span>
                    <span>0 Posts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Post Board & Updates */}
          <div className="space-y-4">
            {/* Post Board */}
            <div className="border border-purple-900 p-4 bg-black/90">
              <h3 className="text-xl mb-4 text-purple-300">Post Board</h3>
              <ul className="space-y-2">
                <li className="hover:text-purple-100 cursor-pointer">Latest Posts</li>
                <li className="hover:text-purple-100 cursor-pointer">Logos</li>
                <li className="hover:text-purple-100 cursor-pointer">Wallpapers</li>
                <li className="hover:text-purple-100 cursor-pointer">Past Projects</li>
              </ul>
            </div>

            {/* Updates Bar */}
            <div className="border border-purple-900 p-4 bg-black/90">
              <h3 className="text-xl mb-4 text-purple-300">Updates</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-purple-300">•</span>
                  <p className="text-sm text-purple-200">New artwork added to gallery</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-300">•</span>
                  <p className="text-sm text-purple-200">Upcoming exhibition details</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-300">•</span>
                  <p className="text-sm text-purple-200">Latest blog post published</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Artworks */}
          <div className="md:col-span-3 border border-purple-900 p-4 mt-4 bg-black/90">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl text-purple-300">Featured Artworks</h3>
              <Link 
                href="/gallery"
                className="text-purple-200 hover:text-purple-100 transition-colors duration-200 flex items-center gap-2"
              >
                See More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArtworks.map((artwork) => (
                <FeaturedArtwork key={artwork.id} artwork={artwork} />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-900 p-4 mt-8 bg-black/90">
        <div className="container mx-auto text-center">
          <p>© EnWretched 2024 - All Rights Reserved</p>
          <div className="mt-2">
            <span className="inline-block bg-purple-900 text-purple-100 px-2 rounded">Visitors: 0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
