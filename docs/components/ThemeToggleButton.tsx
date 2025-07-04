import { useState, useEffect } from 'react';
import { Sun } from './Icon/Sun';
import { Moon } from './Icon/Moon';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button className="theme-toggle-button" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggleButton;
