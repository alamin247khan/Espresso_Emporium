import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import Addcoffee from '../components/Addcoffee.jsx';
import Updatecoffee from '../components/Updatecoffee.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  },
  {
    path: 'Addcoffee',
    element: <Addcoffee />,
  },
  {
    path: 'Updatecoffee',
    element: <Updatecoffee />,
  },
]);

export default router;
