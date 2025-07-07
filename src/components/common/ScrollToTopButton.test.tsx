import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { ScrollToTopButton } from './ScrollToTopButton';

// Mock window.scrollTo for all tests
beforeAll(() => {
  window.scrollTo = jest.fn();
});

// Unit tests for the ScrollToTopButton component

describe('ScrollToTopButton', () => {
  // Test: Button is not visible initially
  it('is not visible initially', () => {
    render(<ScrollToTopButton />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  // Test: Button appears after scrolling down
  it('shows button after scrolling down', () => {
    render(<ScrollToTopButton />);
    // Simulate scroll event and set pageYOffset
    fireEvent.scroll(window, { target: { pageYOffset: 400 } });
    Object.defineProperty(window, 'pageYOffset', { value: 400, writable: true });
    fireEvent.scroll(window);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // Test: Clicking button calls window.scrollTo
  it('calls window.scrollTo when clicked', () => {
    render(<ScrollToTopButton />);
    Object.defineProperty(window, 'pageYOffset', { value: 400, writable: true });
    fireEvent.scroll(window);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
}); 