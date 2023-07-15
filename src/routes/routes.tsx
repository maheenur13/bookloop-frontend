import App from '@/App';
import Books from '@/components/Books';
import { MainLayout } from '@/components/layouts/MainLayout';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Signup from '@/pages/Signup';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign-up',
    element: <Signup />,
  },
  {
    path: '/all-books',
    element: (
      <MainLayout>
        <Books />
      </MainLayout>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
