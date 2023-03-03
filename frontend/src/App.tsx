import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import Detail from './pages/detail/Detail';
import List from './pages/list/List';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: 'detail/:id',
    element: <Detail />,
  },
  {
    path: '*',
    element: <List />,
  },
]);

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#c13f3f',
          borderRadius: 2,
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ConfigProvider>
  );
}
