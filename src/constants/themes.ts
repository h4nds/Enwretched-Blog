/**
 * Single source of truth for theme IDs (layout flash-prevention script + ThemeProvider).
 */
export const THEME_IDS = [
  "enwretched",
  "mirrors",
  "mono",
  "ember",
  "corruption",
  "void",
] as const;

export type ThemeId = (typeof THEME_IDS)[number];

export const THEME_LABELS: Record<ThemeId, string> = {
  enwretched: "Enwretched",
  mirrors: "Mirrors",
  mono: "Mono",
  ember: "Easy",
  corruption: "Corruption",
  void: "Void",
};

/** Header logo art per theme (`public/images/sitelogos/`) */
export const THEME_LOGO_SRC: Record<ThemeId, string> = {
  enwretched: "/images/sitelogos/enwtch-purple.png",
  mirrors: "/images/sitelogos/enwtch-clear.png",
  mono: "/images/sitelogos/enwtch-mono.png",
  ember: "/images/sitelogos/enwtch-green.png",
  corruption: "/images/sitelogos/enwtch-red.png",
  void: "/images/sitelogos/enwtch-blue.png",
};
