"use client";

import { useState } from "react";
import Image from "next/image";
import { undergraduateProjects } from "@/data/undergraduateProjects";
import { normalizeImageSrc } from "@/lib/imagePath";
import type { UndergraduateProject } from "@/types/artwork";

function ProjectMeta({ project }: { project: UndergraduateProject }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.18em] text-theme-text-muted">
      {project.course}
      <span className="mx-2 text-theme-border" aria-hidden>
        ·
      </span>
      {project.period}
    </p>
  );
}

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

export default function UndergraduateGallerySection() {
  const [expanded, setExpanded] = useState<{ src: string; alt: string } | null>(
    null
  );

  return (
    <section
      id="undergraduate-portfolio"
      className="mt-16 border-t border-theme-border pt-14 md:mt-20 md:pt-16"
      aria-labelledby="undergraduate-portfolio-heading"
    >
      <header className="mb-10 max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-theme-text-muted">
          Academic work
        </p>
        <h2
          id="undergraduate-portfolio-heading"
          className="mt-2 font-cormorant text-2xl text-theme-text-heading md:text-4xl"
        >
          Undergraduate Portfolio
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-theme-text md:text-base">
          Selected coursework and studio projects from my undergraduate design
          program—organized by course and project. Includes print, branding,
          advertising, UX wireframes, and client commissions completed during
          my degree at The New York City College of Technology.
        </p>
      </header>

      <ol className="space-y-12 md:space-y-14">
        {undergraduateProjects.map((project, index) => (
          <li
            key={project.id}
            className="rounded-2xl border border-theme-border/80 bg-theme-card/30 p-5 backdrop-blur-sm md:p-8"
          >
            <article>
              <div className="flex flex-col gap-4 border-b border-theme-border/60 pb-6 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0 flex-1">
                  <span className="text-xs tabular-nums text-theme-text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ProjectMeta project={project} />
                  <h3 className="mt-2 text-lg font-semibold text-theme-text-heading md:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-theme-text">
                    {project.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-block rounded-full border border-theme-border/60 bg-theme-accent-muted/25 px-2.5 py-1 text-[11px] text-theme-text">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.images.length > 0 && (
                <div
                  className={`mt-6 grid gap-4 ${
                    project.images.length === 1
                      ? "grid-cols-1 max-w-2xl"
                      : project.images.length <= 4
                        ? "grid-cols-1 sm:grid-cols-2"
                        : "grid-cols-2 sm:grid-cols-3"
                  }`}
                >
                  {project.images.map((image) => (
                    <ImageTile
                      key={image.url}
                      src={image.url}
                      alt={image.alt}
                      onExpand={() =>
                        setExpanded({ src: image.url, alt: image.alt })
                      }
                    />
                  ))}
                </div>
              )}

              {project.documents && project.documents.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-theme-text-muted">
                    {project.images.length > 0
                      ? "Supporting documents"
                      : "Project files"}
                  </h4>
                  <ul className="mt-3 divide-y divide-theme-border/50 rounded-lg border border-theme-border/60 bg-theme-accent-muted/10">
                    {project.documents.map((doc) => (
                      <li key={doc.url}>
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-4 px-4 py-3 text-sm text-theme-text transition hover:bg-theme-accent-muted/25 hover:text-theme-text-heading"
                        >
                          <span>{doc.title}</span>
                          <span className="shrink-0 text-xs uppercase tracking-wider text-theme-text-muted">
                            PDF ↗
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          </li>
        ))}
      </ol>

      {expanded && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setExpanded(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded artwork view"
        >
          <div
            className="relative flex h-full max-h-[90vh] w-full max-w-5xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={normalizeImageSrc(expanded.src)}
              alt={expanded.alt}
              width={1200}
              height={900}
              className="max-h-[90vh] w-auto max-w-full object-contain"
              sizes="100vw"
            />
            <button
              type="button"
              className="absolute right-2 top-2 rounded-full bg-black/60 px-3 py-1 text-2xl text-white hover:bg-black/80"
              onClick={() => setExpanded(null)}
              aria-label="Close expanded view"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
