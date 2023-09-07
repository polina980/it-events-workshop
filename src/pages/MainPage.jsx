import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { useEventsContext } from '../utils/context/EventsContext';
import { useFiltersContext } from '../utils/context/SearchFilterContext';
import { CardList } from '../components/CardList/CardList';
import LeftFilerBar from '../components/LeftFilterBar/LeftFilterBar';
import { TopFilterBar } from '../components/TopFilterBar/TopFilterBar';
import ScrollToTopButton from '../UI-kit/ScrollToTopButton/ScrollToTopButton';
import Loader from '../UI-kit/Loader/Loader';
import { ReactComponent as Menu } from '../images/menu.svg';

export const MainPage = () => {
  const { resetFilters } = useFiltersContext();
  const { isLoading, upcomingEvents, handleCardClick, toggleFavorite } =
    useEventsContext();

  useEffect(() => {
    resetFilters();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isLoading) {
    return <Loader />;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    upcomingEvents.length && (
      <div className={styles.mainPage}>
        {window.innerWidth < 768 ? (
          <button onClick={toggleMenu} className={styles.menuButton}>
            <Menu />
          </button>
        ) : <LeftFilerBar />}
        {isMenuOpen && (
          <LeftFilerBar />
        )}
        {!isMenuOpen && <div>
          <TopFilterBar />
          <CardList
            events={upcomingEvents}
            onCardClick={handleCardClick}
            onLikeClick={toggleFavorite}
          />
          {/* <ScrollToTopButton /> */}
        </div>}
      </div>
    )
  );
};
