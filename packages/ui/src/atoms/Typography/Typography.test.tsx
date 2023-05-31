import { ElementType } from 'react';

import { render, screen } from '@natu/jest-config';

import { Typography, TypographyProps } from './Typography';

interface SetupInput {
  className?: TypographyProps['className'];
  variant?: TypographyProps['variant'];
  component?: ElementType;
}

const setup = ({ ...props }: SetupInput = {}) =>
  render(<Typography {...props}>Typography content</Typography>);

describe('Typography', () => {
  it('should renders children', () => {
    // Arrange
    setup();

    // Assert
    expect(screen.getByText(/typography content/i)).toBeInTheDocument();
  });

  it('should renders custom className', () => {
    // Arrange
    setup({ className: 'mt-2' });

    // Assert
    expect(screen.getByText(/typography content/i)).toHaveClass('mt-2');
  });

  it('should renders custom tag', () => {
    // Arrange
    setup({ component: 'h4' });

    // Assert
    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();
  });
});
