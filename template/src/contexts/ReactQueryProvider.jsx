import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import handleErrors from '@utils/errors/handleErrors';
import { useState } from 'react';

/** Component used to handle the react query configuration and tools */
export const ReactQueryProvider = ({ children }) => {
  // Create a react query client to interact with a cache
  const [queryClient] = useState(
    () =>
      new QueryClient({
        mutationCache: new MutationCache({
          onError: (error) => handleErrors(error)
        }),
        queryCache: new QueryCache({
          onError: (error) => handleErrors(error)
        })
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools position={'bottom-right'} />
      {children}
    </QueryClientProvider>
  );
};
