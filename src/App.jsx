import { ReactQueryProvider } from '@contexts/ReactQueryProvider';
import { CssBaseline } from '@mui/material';
import { router } from '@routes/AppRoutes';
import { useQueryClient } from '@tanstack/react-query';
import '@translations/i18n';
import { RouterProvider } from 'react-router-dom';

/**
 * Component used to handle the application
 */
export const App = () => (
  <CssBaseline>
    <ReactQueryProvider>
      <AppRouter />
    </ReactQueryProvider>
  </CssBaseline>
);

/**
 * Router provider for the application
 * @returns router provider
 */
const AppRouter = () => {
  const queryClient = useQueryClient();
  return <RouterProvider router={router(queryClient)} />;
};
