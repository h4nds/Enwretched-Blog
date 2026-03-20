"use client";

import { useTheme } from "@/contexts/ThemeContext";
import type { ThemeId } from "@/contexts/ThemeContext";

const themePreview: Record<ThemeId, { bg: string }> = {
  enwretched: { bg: "bg-purple-900" },
  mirrors: { bg: "bg-white/10 backdrop-blur" },
  mono: { bg: "bg-stone-600" },
  ember: { bg: "bg-emerald-600" },
  corruption: { bg: "bg-rose-700" },
  void: { bg: "bg-sky-600" },
};

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div
      className="rounded-lg border border-theme-border bg-theme-card p-3 shadow-lg"
      role="group"
      aria-label="Theme switcher"
    >
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-theme-text-muted">
        Look
      </p>
      <div className="flex flex-wrap gap-2" aria-label="Theme colors">
        {themes.map((t) => {
          const isActive = theme === t.id;
          const preview = themePreview[t.id];
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTheme(t.id)}
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-theme-accent focus:ring-offset-2 focus:ring-offset-theme-page ${
                isActive ? "ring-2 ring-theme-accent ring-offset-2 ring-offset-theme-page" : ""
              }`}
              aria-pressed={isActive}
              aria-label={`${t.label} theme`}
              title={t.label}
            >
              <span
                className={`h-6 w-6 rounded-full ${preview.bg} ${
                  isActive ? "ring-2 ring-theme-border ring-offset-1 ring-offset-transparent" : ""
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
