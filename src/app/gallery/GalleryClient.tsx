"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import FeaturedArtwork from "@/components/features/FeaturedArtwork";
import GalleryControls from "@/components/features/GalleryControls";
import ArtworkList from "@/components/features/ArtworkList";
import UndergraduateGallerySection from "@/components/features/UndergraduateGallerySection";
import { getSortedPortfolioArtworks } from "@/data/portfolioArtworks";
import { Artwork } from "@/types/artwork";
import Image from "next/image";

const ITEMS_PER_PAGE = 20;

interface GalleryClientProps {
  wallpapers: string[];
}

export default function GalleryClient({ wallpapers }: GalleryClientProps) {
  const sortedArtworks = getSortedPortfolioArtworks();

  const [filteredArtworks, setFilteredArtworks] =
    useState<Artwork[]>(sortedArtworks);
  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(true);
  const [preview, setPreview] = useState<string | null>(null);

  const totalPages = Math.ceil(filteredArtworks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentArtworks = filteredArtworks.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredArtworks]);

  return (
    <div className="min-h-screen text-theme-text font-mono relative bg-theme-page">
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-theme-text-heading mb-3 md:mb-4">
              Gallery
            </h1>
            <p className="text-sm md:text-base text-theme-text max-w-3xl">
              Selected personal and professional work.  Click any
              piece to view details & additional images.
            </p>
          </div>

          <section aria-labelledby="portfolio-heading">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  id="portfolio-heading"
                  className="font-cormorant text-xl text-theme-text-heading md:text-2xl"
                >
                  Selected work
                </h2>
                <p className="mt-1 text-xs text-theme-text-muted">
                  Personal, client, and independent projects
                </p>
              </div>
              <a
                href="#undergraduate-portfolio"
                className="text-sm text-theme-text-muted underline-offset-4 transition hover:text-theme-text-heading hover:underline"
              >
                Jump to undergraduate portfolio ↓
              </a>
            </div>

            <GalleryControls
              artworks={sortedArtworks}
              onFilterChange={setFilteredArtworks}
              isGridView={isGridView}
              onViewChange={setIsGridView}
            />

            {isGridView ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {currentArtworks.map((artwork) => (
                  <FeaturedArtwork
                    key={artwork.id}
                    artwork={artwork}
                    imageSizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  />
                ))}
              </div>
            ) : (
              <ArtworkList artworks={currentArtworks} />
            )}

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 md:px-4 py-2 text-sm md:text-base rounded-lg bg-theme-accent-muted hover:bg-theme-card-hover disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <span className="text-sm md:text-base text-theme-text">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 md:px-4 py-2 text-sm md:text-base rounded-lg bg-theme-accent-muted hover:bg-theme-card-hover disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </section>

          <UndergraduateGallerySection />

          {wallpapers && wallpapers.length > 0 && (
            <section className="mt-16 border-t border-theme-border pt-12 mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-theme-text-heading mb-4 text-center">
                Wallpaper Collection
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {wallpapers.map((filename) => (
                  <div
                    key={filename}
                    className="border border-theme-border p-4 bg-slate-900/20 rounded-lg text-theme-text flex flex-col items-center aspect-video cursor-pointer"
                    onClick={() => setPreview(filename)}
                  >
                    <div className="aspect-video w-full relative mb-4">
                      <Image
                        src={`/wallpapers/${filename}`}
                        alt={filename}
                        fill
                        className="object-cover rounded"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <h3 className="text-lg mb-2 text-theme-text-heading truncate w-full text-center">
                      {filename
                        .replace(/\.[^/.]+$/, "")
                        .replace(/[-_]/g, " ")}
                    </h3>
                    <a
                      href={`/wallpapers/${filename}`}
                      download
                      className="inline-block px-4 py-2 bg-theme-accent text-white rounded hover:opacity-90 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>
              {preview && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.7)" }}
                  onClick={() => setPreview(null)}
                >
                  <div
                    className="relative w-full max-w-4xl aspect-video flex flex-col items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-2 right-2 text-theme-text-heading hover:text-white text-2xl font-bold z-10"
                      onClick={() => setPreview(null)}
                      aria-label="Close preview"
                    >
                      ×
                    </button>
                    <Image
                      src={`/wallpapers/${preview}`}
                      alt={preview}
                      fill
                      className="object-contain rounded"
                      sizes="100vw"
                    />
                  </div>
                  <a
                    href={`/wallpapers/${preview}`}
                    download
                    className="inline-block px-6 py-2 bg-theme-accent text-white rounded hover:opacity-90 transition mt-8 z-10"
                  >
                    Download
                  </a>
                </div>
              )}
            </section>
          )}
        </main>
        <footer className="border-t border-theme-border p-4 mt-6 md:mt-8 bg-theme-card">
          <div className="container mx-auto text-center text-sm md:text-base">
            <p>©Ray Wretch 2025 - All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
