// Context providers for theme and language
'use client';
import { ThemeProvider } from '@/hooks/useTheme';
import { LanguageProvider } from '@/hooks/useLanguage';
import { ReactNode } from 'react';

// Wraps children with theme and language providers
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
} 