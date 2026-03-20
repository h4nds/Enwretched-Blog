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
  ember: "Green",
  corruption: "Corruption",
  void: "Void",
};
