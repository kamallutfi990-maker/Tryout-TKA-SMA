import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ showLabel = false, className = '' }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initial check for localStorage or system preference
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const activeDark = storedTheme === 'dark' || (!storedTheme && systemPrefersDark);
    if (activeDark) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }

    const handleThemeEvent = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    window.addEventListener('tka_theme_changed', handleThemeEvent);
    return () => window.removeEventListener('tka_theme_changed', handleThemeEvent);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    }
    window.dispatchEvent(new CustomEvent('tka_theme_changed', { detail: { isDark: nextDark } }));
  };

  return (
    <button
      onClick={toggleTheme}
      id="btn-theme-toggle"
      className={`p-2.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-2 group ${className}`}
      aria-label={isDark ? "Beralih ke Mode Siang (Terang)" : "Beralih ke Mode Malam (Gelap)"}
      title={isDark ? "Beralih ke Mode Siang (Terang)" : "Beralih ke Mode Malam (Gelap)"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-600 group-hover:-rotate-12 transition-transform" />
      )}
      {showLabel && (
        <span className="text-xs font-bold font-sans pr-1">
          {isDark ? 'Mode Malam' : 'Mode Siang'}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;

