import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { describe, expect } from 'vitest';

import Detail from '../pages/detail/Detail';
import { render } from '../utils/test/test-utils';

import items from './json/items.json';

const server = setupServer(
  rest.get('/items/:id', (req, res, ctx) => {
    return res(ctx.json(items.data[0]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Detail', () => {
  test('rendering a component that uses useLocation', async () => {
    const route = '/detail/1';

    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[route]}>
        <Detail />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getAllByText('Light pink shoes')[0]).toBeInTheDocument();
      expect(screen.getAllByRole('img')[0]).toBeInTheDocument();
      expect(screen.getByText(/51/)).toBeInTheDocument();
      expect(screen.getByText('送料込み')).toBeInTheDocument();
    });
  });
});
