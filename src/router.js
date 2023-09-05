import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from './Layout/Layout';
import * as page from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<page.MainPage />} />
      <Route
        path="events/:id"
        element={<page.EventPage />}
        loader={page.eventLoader}
        errorElement={<page.EventErrorPage />}
      />
    
      <Route path="favorites" element={<page.FavoritesPage />} />
      <Route path="results" element={<page.SearchResultPage />} />
      <Route path="privacy" element={<page.PrivacyPolicyPage />} />
      <Route path="cookies" element={<page.CookiePage />} />
      <Route path="about" element={<page.About />} />
      <Route path="*" element={<page.NotFoundPage />} />
    </Route>
  )
);

export default router;
