'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
//import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from '@chakra-ui/react';

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>{children}</ChakraProvider>
    </QueryClientProvider>
  );
}

export default Providers;
