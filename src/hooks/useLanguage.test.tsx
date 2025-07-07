import { renderHook, act } from '@testing-library/react';
import { LanguageProvider, useLanguage } from './useLanguage';

// Unit tests for the useLanguage hook

describe('useLanguage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // Test: Default language is en
  it('provides default language as en', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper: LanguageProvider });
    expect(result.current.language).toBe('en');
  });

  // Test: Changes language and persists to localStorage
  it('changes language and persists', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper: LanguageProvider });
    act(() => result.current.changeLanguage('de'));
    expect(result.current.language).toBe('de');
    expect(localStorage.getItem('lang')).toBe('de');
  });

  // Test: Returns correct translation for nested key
  it('returns correct translation for nested key', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper: LanguageProvider });
    expect(result.current.t('header.logoAlt')).toBeDefined();
    expect(typeof result.current.t('header.logoAlt')).toBe('string');
  });
}); 