import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

// Unit tests for the Button component

describe('Button', () => {
  // Test: Button renders with children text
  it('renders with children text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  // Test: Button uses primary variant by default
  it('applies the primary variant by default', () => {
    render(<Button>Primary</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('bg-[#0060A9]');
  });

  // Test: Button uses secondary variant when specified
  it('applies the secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('bg-white');
    expect(btn).toHaveClass('text-[#0060A9]');
  });

  // Test: Button calls onClick handler when clicked
  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
}); 