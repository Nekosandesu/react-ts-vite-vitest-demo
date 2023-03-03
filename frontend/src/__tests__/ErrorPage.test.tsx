import { screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import ErrorPage from '../components/ErrorPage';
import { render } from '../utils/test/test-utils';

describe('ErrorPage', () => {
  it('', () => {
    render(<ErrorPage error="Something went wrong" />);
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });
});
