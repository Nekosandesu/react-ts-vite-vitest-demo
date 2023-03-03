import React, { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { cleanup, render, RenderOptions } from '@testing-library/react';
import { ConfigProvider } from 'antd';
import { afterEach } from 'vitest';

const queryClient = new QueryClient();

// clean react dom after every testing
afterEach(() => {
  cleanup();
});

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#c13f3f',
          borderRadius: 2,
        },
      }}
    >
      <QueryClientProvider client={queryClient}>{children} </QueryClientProvider>
    </ConfigProvider>
  );
};

// override render export
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper' | 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
export { default as userEvent } from '@testing-library/user-event';
