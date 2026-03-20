export interface ArtworkImage {
  url: string;
  alt: string;
  isPrimary?: boolean;
}

export interface Artwork {
  id: string;
  title: string;
  description: string;
  images: ArtworkImage[];
  createdAt: string;
  tags: string[];
  category?: 'undergraduate' | 'professional' | 'personal';
}

export interface FeaturedArtworkProps {
  artwork: Artwork;
  /** Merged onto the root card wrapper (e.g. grid column spans). */
  className?: string;
  /** First visible image LCP hint (home hero piece). */
  imagePriority?: boolean;
} 