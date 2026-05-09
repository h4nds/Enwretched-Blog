"use client";

import { useState, useEffect, useCallback } from "react";
import {
  FOOTER_SIGNAL_LABEL,
  FOOTER_SIGNAL_LINES,
  FOOTER_SIGNAL_ROTATE_MS,
} from "@/constants/footerSignal";

const SIGNAL_COUNT = FOOTER_SIGNAL_LINES.length;
const BALLROOM_REPO_URL = "https://github.com/h4nds/Ballroom";

export default function Footer() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % SIGNAL_COUNT);
  }, []);

  useEffect(() => {
    if (reduceMotion || SIGNAL_COUNT <= 1) return;
    const id = window.setInterval(advance, FOOTER_SIGNAL_ROTATE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, advance]);

  const line = FOOTER_SIGNAL_LINES[index];

  return (
    <footer className="border-t border-theme-border bg-theme-card backdrop-blur-sm">
      <div className="container mx-auto max-w-full px-3 py-5 sm:px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-theme-text">
            © EnWretched 2026 — All rights reserved
          </p>

          <div className="flex w-full max-w-xl flex-col items-stretch gap-3 sm:items-center">
            <button
              type="button"
              onClick={advance}
              className="group flex min-h-[44px] w-full max-w-lg gap-3 rounded-2xl border border-theme-border/80 bg-theme-accent-muted/20 px-4 py-3 text-left transition hover:border-theme-accent/40 hover:bg-theme-accent-muted/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-2 focus-visible:ring-offset-theme-card touch-manipulation sm:mx-auto"
              aria-label="Show next studio line"
            >
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400 motion-safe:animate-pulse"
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-medium uppercase tracking-wider text-theme-text-muted">
                  {FOOTER_SIGNAL_LABEL}
                </div>
                <p
                  className="mt-1 font-mono text-sm leading-snug text-theme-text-heading"
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {line}
                </p>
                <p className="mt-2 text-[10px] text-theme-text-muted opacity-80 group-hover:opacity-100">
                  Update?
                </p>
              </div>
            </button>

            <div className="text-sm text-theme-text">
              <span className="text-theme-text-muted">Forum progress: </span>
              <a
                href={BALLROOM_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-theme-text-heading underline-offset-4 transition hover:text-theme-accent hover:underline"
              >
                ballroom
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
