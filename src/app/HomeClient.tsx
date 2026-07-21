"use client";

import { useState, useEffect, useCallback } from "react";
import Header from "@/components/layout/Header";
import NewsTicker from "@/components/ui/NewsTicker";
import FeaturedArtwork from "@/components/features/FeaturedArtwork";
import BlogPost from "@/components/features/BlogPost";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/features/SplashScreen";
import { getFeaturedArtworks } from "@/data/portfolioArtworks";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";

const featuredArtworks = getFeaturedArtworks(4);

function featuredGridClass(index: number): string {
  if (index === 0) return "md:col-span-4";
  if (index === 1) return "md:col-span-2";
  return "md:col-span-3";
}

function featuredImageSizes(index: number): string {
  if (index === 0) {
    return "(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 760px";
  }
  if (index === 1) {
    return "(max-width: 768px) 100vw, (max-width: 1200px) 36vw, 400px";
  }
  return "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px";
}

const skillTags = [
  "Photoshop Raster & Vector",
  "Photography",
  "Mixed Media",
  "Surrealism",
  "Tattoo",
  "Experimentalism",
];

export default function HomeClient() {
  const [showSplash, setShowSplash] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const recentBlogPosts = blogPosts.slice(0, 3);
  const sidebarPosts = blogPosts.slice(0, 6);
  const latest = blogPosts[0];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const splashShown = sessionStorage.getItem("splashShown");
      if (splashShown) {
        setShowSplash(false);
        setIsContentVisible(true);
      }
    }
  }, []);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
    setTimeout(() => setIsContentVisible(true), 100);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("splashShown", "true");
    }
  }, []);

  return (
    <div className="min-h-screen-dvh min-w-0 overflow-x-clip bg-theme-page text-theme-text font-mono">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <div
        className={`transition-opacity duration-500 ${isContentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <Header />
        <NewsTicker />

        <main>
          {/* Hero — breaks the “all boxes” grid */}
          <section className="relative overflow-hidden border-b border-theme-border">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              aria-hidden
            >
              <div className="absolute -left-1/4 top-0 h-96 w-[70%] rounded-full bg-theme-accent-muted blur-3xl" />
              <div className="absolute -right-1/4 bottom-0 h-64 w-1/2 rounded-full bg-theme-accent/20 blur-3xl" />
            </div>
            <div
              className="home-reveal relative mx-auto max-w-6xl px-3 py-10 sm:px-4 sm:py-12 md:py-16 lg:py-20"
              style={{ animationDelay: "40ms" }}
            >
              <p className="mb-3 text-balance text-[10px] font-medium uppercase tracking-[0.2em] text-theme-text-muted sm:text-[11px] sm:tracking-[0.28em]">
                Graphic design · Tattoo · Full-stack
              </p>
              <h1 className="font-cormorant text-[2rem] font-semibold leading-[1.05] text-theme-text-heading min-[400px]:text-4xl md:text-6xl lg:text-7xl">
                Enwretched
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-theme-text md:text-lg">
               currently working between The intersections of digital media and{" "}
                <span className="text-theme-text-heading">Tattoo</span>,{" "}
                <span className="text-theme-text-heading">Frontend Development</span>, and{" "}
                <span className="text-theme-text-heading">Fundamental Design</span>{" "}
                media—digital pieces, photography, and mixed work with a
                dreamlike edge.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/gallery"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-theme-accent px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-black/20 transition hover:opacity-90 touch-manipulation"
                >
                  View gallery
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-theme-border bg-theme-card/60 px-6 py-2.5 text-sm text-theme-text-heading backdrop-blur-sm transition hover:border-theme-accent/50 hover:bg-theme-accent-muted/40 touch-manipulation"
                >
                  Read the log
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] items-center justify-center text-sm text-theme-text-muted underline-offset-4 transition hover:text-theme-text-heading hover:underline touch-manipulation"
                >
                  Commissions open
                </Link>
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-6xl px-3 py-10 sm:px-4 md:py-14">
            <div className="grid min-w-0 gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Main column */}
              <div className="min-w-0 space-y-12 lg:col-span-7">
                <section
                  className="home-reveal grid gap-4 sm:grid-cols-2"
                  style={{ animationDelay: "120ms" }}
                >
                  <div className="rounded-2xl border border-theme-border/80 bg-theme-card/40 p-5 backdrop-blur-sm transition hover:border-theme-accent/30">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-theme-text-muted">
                      Current focus
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-theme-text">
                      <li>Surreal digital art</li>
                      <li>Zerox Scanning</li>
                      <li>Mixed media</li>
                      <li>Tattoo Design</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-theme-border/80 bg-theme-card/40 p-5 backdrop-blur-sm transition hover:border-theme-accent/30">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-theme-text-muted">
                      Connect
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-theme-text">
                      <li>
                        Instagram:{" "}
                        <span className="text-theme-text-heading">
                          @raywretch
                        </span>
                      </li>
                      <li>
                        Email:{" "}
                        <span className="text-theme-text-heading">
                          enwretched@proton.me
                        </span>
                      </li>
                      <li>
                        Commissions:{" "}
                        <span className="font-semibold text-theme-text-heading">
                          Open
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  className="home-reveal flex flex-wrap gap-2"
                  style={{ animationDelay: "200ms" }}
                >
                  {skillTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-theme-border/60 bg-theme-accent-muted/30 px-3 py-1 text-xs text-theme-text transition hover:border-theme-accent/40"
                    >
                      {tag}
                    </span>
                  ))}
                </section>

                <section
                  className="home-reveal flex flex-col gap-4 rounded-2xl border border-dashed border-theme-border/70 bg-gradient-to-br from-theme-accent-muted/25 to-transparent p-5 sm:flex-row sm:items-center sm:justify-between"
                  style={{ animationDelay: "280ms" }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400 animate-pulse"
                      aria-hidden
                    />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-theme-text-muted">
                        Latest on the blog
                      </p>
                      <Link
                        href={`/blog/${latest.id}`}
                        className="mt-1 block font-medium text-theme-text-heading hover:underline"
                      >
                        {latest.title}
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="/gallery"
                    className="shrink-0 text-sm text-theme-text-muted hover:text-theme-text-heading"
                  >
                    Gallery always updating →
                  </Link>
                </section>
              </div>

              {/* Sidebar — timeline + posts, fewer stacked boxes */}
              <aside
                className="home-reveal min-w-0 space-y-8 lg:col-span-5"
                style={{ animationDelay: "180ms" }}
              >
                <div>
                  <h2 className="font-cormorant text-xl text-theme-text-heading md:text-2xl">
                    Studio feed
                  </h2>
                  <p className="mt-1 text-xs text-theme-text-muted">
                    Notes and posts—newest first.
                  </p>
                  <ul className="relative mt-6 space-y-0 border-l border-theme-border/80 pl-5">
                    <li className="relative pb-6">
                      <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-theme-page bg-theme-accent" />
                      <p className="text-xs uppercase tracking-wider text-theme-text-muted">
                        Update
                      </p>
                      <p className="mt-1 text-sm text-theme-text">
                        New blog:{" "}
                        <Link
                          href={`/blog/${latest.id}`}
                          className="text-theme-text-heading hover:underline"
                        >
                          {latest.title}
                        </Link>
                      </p>
                    </li>
                    <li className="relative pb-6">
                      <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-theme-page bg-theme-text-muted" />
                      <p className="text-sm text-theme-text">
                        been playing alot of cs2 lately
                      </p>
                    </li>
                    <li className="relative">
                      <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-theme-page bg-theme-text-muted" />
                      <p className="text-sm text-theme-text">
                        thinking of a new deck options (Antihero or Rasvett)
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-theme-border/80 bg-theme-card/30 p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-theme-text-muted">
                      Post board
                    </h3>
                    <Link
                      href="/blog"
                      className="text-xs text-theme-text-heading hover:underline"
                    >
                      All posts
                    </Link>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {sidebarPosts.map((post) => (
                      <li key={post.id}>
                        <Link
                          href={`/blog/${post.id}`}
                          className="block text-sm text-theme-text transition hover:translate-x-0.5 hover:text-theme-text-heading"
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-theme-accent/30 bg-theme-accent-muted/20 p-6 text-center">
                  <p className="text-sm text-theme-text">
                    Commissions or collabs? Please reach out!!!!
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-theme-accent py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Contact
                  </Link>
                </div>
              </aside>
            </div>
          </div>

          {/* Featured — bento-style grid */}
          <section className="border-y border-theme-border bg-theme-accent-muted/15 py-12 md:py-16">
            <div
              className="home-reveal mx-auto max-w-6xl px-3 sm:px-4"
              style={{ animationDelay: "100ms" }}
            >
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-theme-text-muted">
                    Selected work
                  </p>
                  <h2 className="mt-2 font-cormorant text-3xl text-theme-text-heading md:text-4xl">
                    Featured artworks
                  </h2>
                </div>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 text-sm text-theme-text-heading transition hover:gap-3"
                >
                  Full gallery
                  <span aria-hidden>→</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
                {featuredArtworks.map((artwork, index) => (
                  <FeaturedArtwork
                    key={artwork.id}
                    artwork={artwork}
                    className={`rounded-2xl ${featuredGridClass(index)}`}
                    imagePriority={index === 0}
                    imageSizes={featuredImageSizes(index)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Blog strip */}
          <section className="mx-auto max-w-6xl px-3 py-12 sm:px-4 md:py-16">
            <div
              className="home-reveal mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: "80ms" }}
            >
              <h2 className="font-cormorant text-2xl text-theme-text-heading md:text-3xl">
                Latest from the blog
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-theme-text-muted hover:text-theme-text-heading"
              >
                View all
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recentBlogPosts.map((post, i) => (
                <div
                  key={post.id}
                  className="home-reveal"
                  style={{ animationDelay: `${120 + i * 70}ms` }}
                >
                  <BlogPost post={post} />
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
