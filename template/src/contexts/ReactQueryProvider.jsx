import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import handleErrors from '@utils/errors/handleErrors';
import { useMemo } from 'react';

/** Define component props */
ReactQueryProvider.propTypes = {
  children: React.PropTypes
};
/** Setup handle error for all request */
const mutationCache = new MutationCache({
  onError: handleErrors
});

/** Setup handle error for all request */
const queryCache = new QueryCache({
  onError: handleErrors
});

/** Component used to handle the react query configuration and tools */
export const ReactQueryProvider = ({ children }) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        mutationCache,
        queryCache
      }),
    []
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools position={'bottom-right'} />
      {children}
    </QueryClientProvider>
  );
};
