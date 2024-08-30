'use client';

import { type PropsWithChildren, useState } from 'react';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from '@/store';
import { Toaster } from 'react-hot-toast';

export function Providers({ children }: PropsWithChildren) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Toaster />
        {children}
      </Provider>
    </QueryClientProvider>
  );
}
