"use client";

import { useTheme } from "@/contexts/ThemeContext";
import type { ThemeId } from "@/contexts/ThemeContext";

const themePreview: Record<ThemeId, { bg: string; label: string }> = {
  enwretched: { bg: "bg-purple-900", label: "Enwretched" },
  mirrors: { bg: "bg-white/10 backdrop-blur", label: "Mirrors" },
  mono: { bg: "bg-stone-600", label: "Mono" },
  ember: { bg: "bg-amber-700", label: "Ember" },
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
      <div className="flex flex-wrap gap-2">
        {themes.map((t) => {
          const isActive = theme === t.id;
          const preview = themePreview[t.id];
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTheme(t.id)}
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-theme-accent focus:ring-offset-2 focus:ring-offset-theme-page ${
                isActive
                  ? "ring-2 ring-theme-accent bg-theme-accent-muted text-theme-text-heading"
                  : "bg-theme-accent-muted/50 text-theme-text hover:bg-theme-accent-muted"
              }`}
              aria-pressed={isActive}
              aria-label={`Use ${t.label} theme`}
              title={t.label}
            >
              <span
                className={`h-4 w-4 rounded-full ${preview.bg} shrink-0 ${
                  isActive ? "ring-2 ring-theme-accent ring-offset-2 ring-offset-theme-page" : ""
                }`}
              />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
