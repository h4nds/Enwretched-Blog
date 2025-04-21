import Image from 'next/image';
import { FeaturedArtworkProps } from '@/types/artwork';

export default function FeaturedArtwork({ artwork }: FeaturedArtworkProps) {
  return (
    <div className="border border-purple-900 p-4 bg-slate-900/20">
      <div className="aspect-video relative mb-4">
        <Image
          src={artwork.imageUrl}
          alt={artwork.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h4 className="text-lg mb-2 text-purple-300">{artwork.title}</h4>
      <p className="text-sm mb-2">{artwork.description}</p>
      <div className="text-xs">Created: {artwork.createdAt}</div>
    </div>
  );
} 