import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-purple-200 font-mono">
      {/* Gnarly Ass News Ticker */}
      <div className="border-b border-purple-900 bg-black/90">
        <div className="flex items-center py-2">
          <span className="px-4 text-purple-300 font-medium">Latest:</span>
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              {/*}
              <span className="text-purple-200">New artwork &quot;Follow The Notes&quot; now available in the gallery • </span> */}
              <span className="text-purple-200">Website Still Under Construction • </span>
              <span className="text-purple-200">Behind-the-scenes Work In Progress • </span>
              <span className="text-purple-200">Thanks for being patient!! • </span>
            </div>
          </div>
        </div>
      </div>

      {/* Header with navigation */}
      <header className="border-b border-purple-900 p-4 bg-black">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-purple-300"> EnWretched </h1>
          <nav className="space-x-4">
            <Link href="/" className="hover:text-purple-100">Home</Link>
            <Link href="/gallery" className="hover:text-purple-100">Gallery</Link>
            <Link href="/forum" className="hover:text-purple-100">Forum</Link>
            <Link href="/guestbook" className="hover:text-purple-100">About</Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
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
                <li className="hover:text-purple-100 cursor-pointer"> Latest Posts</li>
                <li className="hover:text-purple-100 cursor-pointer"> Logos</li>
                <li className="hover:text-purple-100 cursor-pointer"> Wallpapers</li>
                <li className="hover:text-purple-100 cursor-pointer"> Past Projects</li>
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
            <h3 className="text-xl mb-4 text-purple-300">Featured Artworks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-purple-900 p-4 bg-slate-900/20">
                <div className="aspect-video bg-purple-900 mb-4"></div>
                <h4 className="text-lg mb-2 text-purple-300">Follow The Notes</h4>
                <p className="text-sm mb-2">This surreal, dreamlike piece on a mysterious woman in white entering a reflective river, her spine-like laced in a cursed Tattoo suggesting transformation of self. The lush environment blends natural elements with modern touches like glowing windows and graffiti on ancient stones.</p>
                <div className="text-xs">Published: 2024</div>
              </div>
              
              <div className="border border-purple-900 p-4 bg-slate-900/20">
                <div className="aspect-video bg-purple-900 mb-4"></div>
                <h4 className="text-lg mb-2 text-purple-300">Ten</h4>
                <p className="text-sm mb-2">Mixed media piece curated orginally from a photograph i took of the waterside of a river in the woods.
                </p>
                <div className="text-xs">Created: 2024</div>
              </div>

              <div className="border border-purple-900 p-4 bg-slate-900/20">
                <div className="aspect-video bg-purple-900 mb-4"></div>
                <h4 className="text-lg mb-2 text-purple-300">435 Hz</h4>
                <p className="text-sm mb-2">This piece explores the intensity and distortion of sensory overload—especially sound. I wanted to capture what it feels like to be immersed in heavy bass, noise, and movement, rather than just show it. The image centers around abstracted figures and bursts of color that feel like they&apos;re both forming and dissolving at the same time.</p>
                <div className="text-xs">Created: 2025</div>
              </div>

              <div className="border border-purple-900 p-4 bg-slate-900/20">
                <div className="aspect-video bg-purple-900 mb-4"></div>
                <h4 className="text-lg mb-2 text-purple-300">Recovery</h4>
                <p className="text-sm mb-2">This piece explores nature&apos;s quiet surrealism in untouched, mossy spaces that feel like portals. It captures a hidden spring deep in the forest, veiled in mist, with softened focus like a half-remembered dream. </p>
                <div className="text-xs">Created: 2024</div>
              </div>
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
