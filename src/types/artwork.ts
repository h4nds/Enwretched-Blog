export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  tags: string[];
}

export interface FeaturedArtworkProps {
  artwork: Artwork;
} 