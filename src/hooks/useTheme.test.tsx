import { renderHook, act } from '@testing-library/react';
import { ThemeProvider, useTheme } from './useTheme';

// Unit tests for the useTheme hook

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false, // or true if you want to simulate dark mode
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      dispatchEvent: jest.fn(),
    })),
  });
});

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  // Test: Default theme is light
  it('provides default theme as light', () => {
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });
    expect(result.current.theme).toBe('light');
  });

  // Test: Toggles theme and updates localStorage and document class
  it('toggles theme between light and dark', () => {
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });
    act(() => result.current.toggleTheme());
    expect(result.current.theme).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    act(() => result.current.toggleTheme());
    expect(result.current.theme).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
}); 