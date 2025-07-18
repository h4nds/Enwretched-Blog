"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function WallpaperModalClient({ filename }: { filename: string }) {
  const [preview, setPreview] = useState(false);
  return (
    <div
      className="border border-purple-300 p-4 bg-slate-900/20 rounded-lg text-purple-200 flex flex-col items-center aspect-video"
      style={{ cursor: 'pointer' }}
      onClick={() => setPreview(true)}
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
      <h4 className="text-lg mb-2 text-purple-300 truncate w-full text-center">{filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')}</h4>
      <a
        href={`/wallpapers/${filename}`}
        download
        className="inline-block px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-600 transition"
        onClick={e => e.stopPropagation()}
      >
        Download
      </a>
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.01)' }}
          onClick={() => setPreview(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-purple-300 hover:text-white text-2xl font-bold z-10"
              onClick={() => setPreview(false)}
              aria-label="Close preview"
            >
              ×
            </button>
            <Image
              src={`/wallpapers/${filename}`}
              alt={filename}
              fill
              className="object-contain rounded"
              sizes="100vw"
            />
            <a
              href={`/wallpapers/${filename}`}
              download
              className="inline-block px-6 py-2 bg-purple-700 text-white rounded hover:bg-purple-600 transition mt-4 z-10"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
} 