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
}

export interface FeaturedArtworkProps {
  artwork: Artwork;
} 