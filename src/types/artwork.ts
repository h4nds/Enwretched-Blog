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
} 