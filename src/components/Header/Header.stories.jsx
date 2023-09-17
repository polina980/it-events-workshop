import { Header } from './Header';
import { RouterProvider } from 'react-router-dom';
import router from '../../router';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    componentSubtitle: 'Components > Header',
  },
};

/** Применимость: Layout */
export const Basic = () => {
  return (
    <RouterProvider router={router}>
      <Header />
    </RouterProvider>
  );
};
