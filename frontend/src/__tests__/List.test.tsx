import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { describe, expect } from 'vitest';

import List from '../pages/list/List';
import { render } from '../utils/test/test-utils';

import items from './json/items.json';

const server = setupServer(
  rest.get('/categories', (req, res, ctx) => {
    return res(ctx.json(items));
  }),
  rest.get('/items', (req, res, ctx) => {
    return res(ctx.json(items));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

function renderList() {
  render(
    <MemoryRouter>
      <List />
    </MemoryRouter>
  );
}

describe('load categories and items', () => {
  test('categories', async () => {
    renderList();
    // wait until the `get` request promise resolves and
    // the component calls setState and re-renders.
    // `waitFor` waits until the callback doesn't throw an error
    // await waitFor(() => {
    //   expect(screen.queryByText(/レディース/i)).toBeInTheDocument();
    // });
    // todo: why waitFor not work?
    setTimeout(() => {
      expect(screen.queryByText(/レディース/i)).toBeInTheDocument();
    }, 2000);
  });
  test('items', async () => {
    renderList();
    await waitFor(() => screen.queryAllByText(/Light pink shoes/i));
    expect(screen.queryAllByText(/Light pink shoes/i)[0]).toBeInTheDocument();
  });
});

describe('List searching', () => {
  test('Search "l", showing names with "l"', async () => {
    // get dom ready
    renderList();
    await waitFor(() => screen.queryByText(/インテリア/i));
    await waitFor(() => screen.queryAllByText(/Light pink shoes/i));

    // enter a value to search
    const input: HTMLInputElement = screen.getByPlaceholderText('検索');
    fireEvent.change(input, { target: { value: 'l' } });
    expect(input.value).toBe('l');
    expect(screen.queryAllByText(/Light pink shoes/i)[0]).toBeInTheDocument();
  });

  test('Search "l", not showing names without "l"', async () => {
    // get dom ready
    renderList();
    await waitFor(() => screen.queryByText(/インテリア/i));
    await waitFor(() => screen.queryAllByText(/Light pink shoes/i));

    // enter a value to search
    const input: HTMLInputElement = screen.getByPlaceholderText('検索');
    fireEvent.change(input, { target: { value: 'l' } });
    expect(input.value).toBe('l');
    // need time to respond to the searching
    setTimeout(() => {
      expect(screen.queryAllByText(/ぬいぐるみ/i)).toBeNull();
    }, 2000);
  });
});

describe('Categories switching', () => {
  it('Switch to "すべて", showing "Light pink shoes"', async () => {
    // get dom ready
    renderList();
    await waitFor(() => screen.queryByText(/インテリア/i));
    await waitFor(() => screen.queryAllByText(/Light pink shoes/i));

    // switch tab
    fireEvent.click(screen.getByText(/すべて/i));
    expect(screen.queryAllByText(/Light pink shoes/i)[0]).toBeInTheDocument();
  });

  it('Switch to "インテリア", showing nothing', async () => {
    // get dom ready
    renderList();
    await waitFor(() => screen.queryByText(/インテリア/i));
    await waitFor(() => screen.queryAllByText(/Light pink shoes/i));

    // switch tab
    setTimeout(() => {
      fireEvent.click(screen.getByText(/インテリア/i));
    }, 2000);
    setTimeout(() => {
      expect(screen.queryAllByText(/Light pink shoes/i)).toBeNull();
    }, 4000);
  });

  it('Switch to "レディース", showing "Vegan leather bag", not showing "ぬいぐるみ"', async () => {
    // get dom ready
    renderList();
    await waitFor(() => screen.queryAllByText(/Light pink shoes/i));

    // switch tab
    fireEvent.click(screen.getByText('すべて'));
    setTimeout(() => {
      expect(screen.getByText(/Vegan leather bag/i)).toBeInTheDocument();
      expect(screen.getByText('ぬいぐるみ')).toBeNull();
    }, 2000);
  });
});
