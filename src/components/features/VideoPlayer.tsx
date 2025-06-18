import React from 'react';

interface VideoPlayerProps {
  src: string;
  title: string;
  className?: string;
}

export default function VideoPlayer({ src, title, className = '' }: VideoPlayerProps) {
  return (
    <div className={`relative w-full aspect-video ${className}`}>
      <video
        src={src}
        title={title}
        controls
        className="w-full h-full object-cover rounded-lg"
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
} 