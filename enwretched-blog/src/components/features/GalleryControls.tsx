"use client";

import { useState, useEffect } from 'react';
import { Artwork } from '@/types/artwork';

interface GalleryControlsProps {
  artworks: Artwork[];
  onFilterChange: (filteredArtworks: Artwork[]) => void;
  isGridView: boolean;
  onViewChange: (isGridView: boolean) => void;
}

export default function GalleryControls({ artworks, onFilterChange, isGridView, onViewChange }: GalleryControlsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Get all unique tags from artworks
  const allTags = Array.from(new Set(artworks.flatMap(artwork => artwork.tags)));

  // Filter artworks based on search and selected tags
  useEffect(() => {
    setIsLoading(true);
    
    const filtered = artworks.filter(artwork => {
      const matchesSearch = artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          artwork.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => artwork.tags.includes(tag));
      
      return matchesSearch && matchesTags;
    });

    // Simulate loading delay for better UX
    setTimeout(() => {
      onFilterChange(filtered);
      setIsLoading(false);
    }, 300);
  }, [searchQuery, selectedTags, artworks, onFilterChange]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="space-y-4 mb-8">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search artworks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-slate-900/50 border border-purple-900 rounded-lg px-4 py-2 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {isLoading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Tags Filter */}
      <div className="flex flex-wrap gap-2">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedTags.includes(tag)
                ? 'bg-purple-500 text-white'
                : 'bg-purple-900/30 text-purple-200 hover:bg-purple-900/50'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* View Toggle */}
      <div className="flex justify-end">
        <button
          onClick={() => onViewChange(!isGridView)}
          className="p-2 rounded-lg bg-purple-900/30 hover:bg-purple-900/50 transition-colors"
        >
          {isGridView ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
} 