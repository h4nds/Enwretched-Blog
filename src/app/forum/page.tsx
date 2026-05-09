"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import NewsletterSignup from "@/components/features/NewsletterSignup";
import {
  BALLROOM_REPO_URL,
  BALLROOM_STACK_SUMMARY,
} from "@/constants/ballroom";

function ProgressRow({
  label,
  status,
  tone,
}: {
  label: string;
  status: string;
  tone: "done" | "active" | "planned";
}) {
  const statusClass =
    tone === "done"
      ? "text-emerald-400"
      : tone === "active"
        ? "text-amber-400"
        : "text-theme-text-muted";
  return (
    <div className="flex justify-between items-center gap-3">
      <span className="text-sm text-theme-text">{label}</span>
      <span className={`shrink-0 text-sm ${statusClass}`}>{status}</span>
    </div>
  );
}

export default function Forum() {
  return (
    <div className="min-h-screen bg-theme-page text-theme-text font-mono">
      <Header />

      <main className="container mx-auto p-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-cormorant text-5xl text-theme-text-heading md:text-8xl">
              Ballroom
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-theme-text md:text-xl">
              {BALLROOM_STACK_SUMMARY} This site (
              <span className="text-theme-text-heading">EnWretched</span>) is the
              portfolio home;{" "}
              <span className="text-theme-text-heading">Ballroom</span> is the
              forum app repo where active development logs, issues, and code live.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={BALLROOM_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-theme-accent/40 bg-theme-accent-muted/40 px-6 py-3 text-sm font-semibold text-theme-text-heading transition hover:border-theme-accent hover:bg-theme-accent-muted/60"
              >
                ballroom on GitHub
              </a>
              <span className="text-xs text-theme-text-muted">
                Same link as &ldquo;Forum progress&rdquo; in the footer
              </span>
            </div>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-theme-border bg-theme-card p-6">
              <h2 className="mb-4 text-2xl font-bold text-theme-text-heading">
                What&apos;s coming
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-theme-text-heading">
                    Artist showcases
                  </h3>
                  <p className="text-sm text-theme-text">
                    Share work and get feedback from the community.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-theme-text-heading">
                    Discussion boards
                  </h3>
                  <p className="text-sm text-theme-text">
                    Space to talk about the project and swap ideas—not wired into
                    this Next.js site yet.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-theme-text-heading">
                    Collaborations
                  </h3>
                  <p className="text-sm text-theme-text">
                    Connect with people on similar builds and side projects.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-theme-text-heading">
                    Resources
                  </h3>
                  <p className="text-sm text-theme-text">
                    Tutorials, tools, and references for people shipping their own
                    things.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-theme-border bg-theme-card p-6">
              <h2 className="mb-4 text-2xl font-bold text-theme-text-heading">
                Build status
              </h2>
              <p className="mb-6 text-sm text-theme-text">
                High-level snapshot; the repo README is the source of truth for
                setup (Vite on one port, Rails API proxied on{" "}
                <code className="text-theme-text-heading">/api</code>
                ).
              </p>

              <div className="space-y-4">
                <div className="rounded-lg border border-theme-border bg-theme-accent-muted/30 p-4">
                  <h3 className="mb-3 font-semibold text-theme-text-heading">
                    In the Ballroom repo
                  </h3>
                  <div className="space-y-2">
                    <ProgressRow
                      label="Rails JSON API (backend)"
                      status="In progress"
                      tone="active"
                    />
                    <ProgressRow
                      label="React + Vite client"
                      status="In progress"
                      tone="active"
                    />
                    <ProgressRow
                      label="Auth wired end-to-end"
                      status="Planned / iterating"
                      tone="planned"
                    />
                    <ProgressRow
                      label="Public beta / deploy story"
                      status="Planned"
                      tone="planned"
                    />
                  </div>
                </div>

                <div className="rounded-lg border border-theme-border bg-theme-accent-muted/30 p-4">
                  <h3 className="mb-2 font-semibold text-theme-text-heading">
                    Follow along
                  </h3>
                  <p className="text-sm text-theme-text">
                    Commits and issues on GitHub are the real progress bar. This
                    page stays a light overview so EnWretched doesn&apos;t pretend
                    to host the forum yet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-theme-border bg-theme-card p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-theme-text-heading">
              In the meantime
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-theme-text">
              More on this site while Ballroom ships.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={BALLROOM_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-theme-accent-muted px-6 py-3 text-theme-text transition-colors duration-200 hover:bg-theme-card-hover"
              >
                GitHub repo
              </a>
              <Link
                href="/blog"
                className="rounded-lg bg-theme-accent-muted px-6 py-3 text-theme-text transition-colors duration-200 hover:bg-theme-card-hover"
              >
                Blog
              </Link>
              <Link
                href="/gallery"
                className="rounded-lg bg-theme-accent-muted px-6 py-3 text-theme-text transition-colors duration-200 hover:bg-theme-card-hover"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="rounded-lg bg-theme-accent-muted px-6 py-3 text-theme-text transition-colors duration-200 hover:bg-theme-card-hover"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <NewsletterSignup />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
