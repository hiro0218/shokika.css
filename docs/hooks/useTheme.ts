import { useState, useEffect, useCallback } from 'react';
import type { Theme } from '../types/theme';
import { THEMES, DEFAULT_THEME } from '../types/theme';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as Theme) || DEFAULT_THEME;
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    if (theme !== null) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
  }, []);

  return {
    theme,
    toggleTheme,
    isInitialized: theme !== null,
  };
};
