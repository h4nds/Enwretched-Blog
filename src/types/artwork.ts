export interface ArtworkImage {
  url: string;
  alt: string;
  isPrimary?: boolean;
}

export interface GalleryDocument {
  title: string;
  url: string;
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

export interface UndergraduateProject {
  id: string;
  title: string;
  course: string;
  period: string;
  description: string;
  tags: string[];
  images: ArtworkImage[];
  documents?: GalleryDocument[];
}

export interface FeaturedArtworkProps {
  artwork: Artwork;
  /** Merged onto the root card wrapper (e.g. grid column spans). */
  className?: string;
  /** First visible image LCP hint (home hero piece). */
  imagePriority?: boolean;
  /** Passed to next/image `sizes` so the optimizer matches rendered width (home bento vs gallery grid). */
  imageSizes?: string;
} 