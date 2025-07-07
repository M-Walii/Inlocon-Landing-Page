// Theme context and hook for light/dark mode
'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Theme context
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

// Provides theme state and toggle function to children
export const ThemeProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
  const [theme, setTheme] = useState<Theme>('light');

  // On mount, read theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    const system =
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    const initial = stored || system;
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  // Toggle theme and persist to localStorage
  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', next === 'dark');
      localStorage.setItem('theme', next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use theme context
export const useTheme = () => useContext(ThemeContext);
