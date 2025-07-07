// Language context and hook for i18n support
'use client';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  ReactElement,
} from 'react';
import en from '../locales/en.json';
import de from '../locales/de.json';

type Lang = 'en' | 'de';
type Messages = Record<string, unknown>;

interface LanguageContextType {
  language: Lang;
  changeLanguage: (l: Lang) => void;
  t: (key: string) => string;
}

// Translation resources
const resources: Record<Lang, Messages> = { en, de };

// Utility to apply nested keys (e.g. 'hero.title')
function getNested(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && acc !== null && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

// Language context
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  changeLanguage: () => {},
  t: (k) => k,
});

// Provides language state and translation function to children
export const LanguageProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [language, setLanguage] = useState<Lang>('en');
  const [isMounted, setIsMounted] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem('lang') as Lang | null;
    if (stored && (stored === 'en' || stored === 'de')) {
      setLanguage(stored);
    }
  }, []);

  // Change language and persist to localStorage
  const changeLanguage = (l: Lang) => {
    setLanguage(l);
    localStorage.setItem('lang', l);
  };

  // Translation function with nested key support
  const t = (key: string) => {
    const currentLang = isMounted ? language : 'en';
    const value = getNested(resources[currentLang], key);
    return typeof value === 'string' ? value : key;
  };

  const providerValue = {
    language: isMounted ? language : 'en',
    changeLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={providerValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use language context
export const useLanguage = () => useContext(LanguageContext);
