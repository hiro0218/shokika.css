export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type Theme = (typeof THEMES)[keyof typeof THEMES];

export const DEFAULT_THEME: Theme = THEMES.LIGHT;
