import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

/**
 * Helper component that allows the page to display the Header and the Routes in the App component
 * @returns The header and the route where the user is.
 */
const Layout = () => {
  return (
    <Stack direction={'row'}>
      <main>
        <Outlet />
      </main>
    </Stack>
  );
};

export default Layout;
