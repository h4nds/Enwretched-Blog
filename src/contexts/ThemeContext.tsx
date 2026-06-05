"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  THEME_IDS,
  THEME_LABELS,
  type ThemeId,
} from "@/constants/themes";

export const THEME_STORAGE_KEY = "enwretched_theme";

export type { ThemeId };

const THEMES: { id: ThemeId; label: string }[] = THEME_IDS.map((id) => ({
  id,
  label: THEME_LABELS[id],
}));

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
    const themeId =
      stored === "spotlight" ? "corruption" : stored;
    if (themeId && THEME_IDS.includes(themeId as ThemeId)) {
      setThemeState(themeId as ThemeId);
      document.documentElement.setAttribute("data-theme", themeId);
      if (stored === "spotlight") {
        localStorage.setItem(THEME_STORAGE_KEY, "corruption");
      }
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
