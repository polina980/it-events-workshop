import styles from './styles.module.scss';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { EventsProvider } from '../utils/context/EventsContext';
import { FiltersProvider } from '../utils/context/SearchFilterContext';

const Layout = () => {
  return (
    <EventsProvider>
      <FiltersProvider>
        <div className={styles.wrapper}>
          <div className={styles.page}>
            <Header />
            {<Outlet />}
            <Footer />
          </div>
        </div>
      </FiltersProvider>
    </EventsProvider>
  );
};

export { Layout };
