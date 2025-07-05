import { Sun } from '../Icon/Sun';
import { Moon } from '../Icon/Moon';
import { useTheme } from '../../hooks/useTheme';
import { THEMES } from '../../types/theme';

const ThemeToggleButton = () => {
  const { theme, toggleTheme, isInitialized } = useTheme();

  // 初期化前は何も表示しない（hydration mismatch回避）
  if (!isInitialized) {
    return null;
  }

  return (
    <button
      className="theme-toggle-button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === THEMES.LIGHT ? 'dark' : 'light'} theme`}
    >
      {theme === THEMES.LIGHT ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggleButton;
