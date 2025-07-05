export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

export const THEMES = {
  LIGHT: 'light' as const,
  DARK: 'dark' as const,
} as const;

export const DEFAULT_THEME: Theme = THEMES.LIGHT;
