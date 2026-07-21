"use client";

import { useState } from "react";
import Image from "next/image";
import { processGalleryProjects } from "@/data/undergraduateProjects";
import { normalizeImageSrc } from "@/lib/imagePath";
import type { UndergraduateProject } from "@/types/artwork";
import {
  CaseStudyDetails,
  OutcomeLine,
} from "@/components/features/GalleryProjectExtras";

function ImageTile({
  src,
  alt,
  onExpand,
}: {
  src: string;
  alt: string;
  onExpand: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onExpand}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-theme-border/80 bg-theme-card/40 text-left transition hover:border-theme-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent"
    >
      <Image
        src={normalizeImageSrc(src)}
        alt={alt}
        fill
        className="object-contain p-2 transition duration-300 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
      />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-[10px] uppercase tracking-wider text-white opacity-0 transition group-hover:opacity-100">
        View full size
      </span>
    </button>
  );
}

function ProcessProjectCard({ project }: { project: UndergraduateProject }) {
  return (
    <article className="rounded-xl border border-theme-border/70 bg-theme-card/20 p-5 md:p-6">
      <h3 className="text-lg font-semibold text-theme-text-heading md:text-xl">
        {project.title}
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-theme-text">
        {project.description}
      </p>
      {project.outcomeLine && <OutcomeLine text={project.outcomeLine} />}
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <span className="inline-block rounded-full border border-theme-border/60 bg-theme-accent-muted/25 px-2.5 py-1 text-[11px] text-theme-text">
              {tag}
            </span>
          </li>
        ))}
      </ul>
      <CaseStudyDetails
        caseStudy={project.caseStudy}
        documents={project.documents}
      />
      {project.images.length > 0 && (
        <div
          className={`mt-6 grid gap-4 ${
            project.images.length === 1
              ? "max-w-2xl grid-cols-1"
              : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          {project.images.map((image) => (
            <ProcessImage key={image.url} image={image} />
          ))}
        </div>
      )}
    </article>
  );
}

function ProcessImage({
  image,
}: {
  image: { url: string; alt: string };
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <ImageTile
        src={image.url}
        alt={image.alt}
        onExpand={() => setExpanded(true)}
      />
      {expanded && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setExpanded(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded artwork view"
        >
          <div
            className="relative flex h-full max-h-[90vh] w-full max-w-5xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={normalizeImageSrc(image.url)}
              alt={image.alt}
              width={1200}
              height={900}
              className="max-h-[90vh] w-auto max-w-full object-contain"
              sizes="100vw"
            />
            <button
              type="button"
              className="absolute right-2 top-2 rounded-full bg-black/60 px-3 py-1 text-2xl text-white hover:bg-black/80"
              onClick={() => setExpanded(false)}
              aria-label="Close expanded view"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function ProcessGallerySection() {
  if (processGalleryProjects.length === 0) return null;

  return (
    <section
      id="gallery-process-work"
      className="mt-16 border-t border-theme-border pt-14 md:mt-20 md:pt-16"
      aria-labelledby="gallery-process-work-heading"
    >
      <header className="mb-8 max-w-3xl">
        <h2
          id="gallery-process-work-heading"
          className="font-cormorant text-2xl text-theme-text-heading md:text-3xl"
        >
          Process & earlier work
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-theme-text md:text-base">
          Wireframes, foundation layouts, and studio studies—supporting pieces
          that sit alongside the main gallery above.
        </p>
      </header>

      <div className="space-y-8">
        {processGalleryProjects.map((project) => (
          <ProcessProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
