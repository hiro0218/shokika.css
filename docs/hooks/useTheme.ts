import { useState, useEffect, useCallback, useRef } from 'react';
import type { Theme } from '../types/theme';
import { THEMES, DEFAULT_THEME } from '../types/theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as Theme) || DEFAULT_THEME;
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    isInitialized.current = true;
  }, []);

  useEffect(() => {
    if (isInitialized.current && theme !== null) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
  }, []);

  return {
    theme,
    toggleTheme,
    isInitialized: theme !== null,
  };
}
