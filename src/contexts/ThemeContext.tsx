"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const THEME_STORAGE_KEY = "enwretched_theme";

export type ThemeId = "enwretched" | "mirrors" | "mono" | "ember";

const THEMES: { id: ThemeId; label: string }[] = [
  { id: "enwretched", label: "Enwretched" },
  { id: "mirrors", label: "Mirrors" },
  { id: "mono", label: "Mono" },
  { id: "ember", label: "Green" },
];

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
  themes: typeof THEMES;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>("enwretched");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && THEMES.some((t) => t.id === stored)) {
      setThemeState(stored as ThemeId);
      document.documentElement.setAttribute("data-theme", stored);
    }
    setMounted(true);
  }, []);

  const setTheme = (id: ThemeId) => {
    setThemeState(id);
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem(THEME_STORAGE_KEY, id);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, themes: THEMES }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
