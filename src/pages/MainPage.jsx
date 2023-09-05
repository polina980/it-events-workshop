import styles from './styles.module.scss';
import { useEffect } from 'react';
import { useEventsContext } from '../utils/context/EventsContext';
import { useFiltersContext } from '../utils/context/SearchFilterContext';
import CardList from '../components/CardList/CardList';
import LeftFilerBar from '../components/LeftFilterBar/LeftFilterBar';
import TopFilersBar from '../components/TopFilersBar/TopFilersBar';
import ScrollToTopButton from '../UI-kit/ScrollToTopButton/ScrollToTopButton';
import Loader from '../UI-kit/Loader/Loader';

const MainPage = () => {
  const { resetFilters } = useFiltersContext();
  const { isLoading, upcomingEvents, handleCardClick, toggleFavorite } =
    useEventsContext();

  useEffect(() => {
    resetFilters();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    upcomingEvents.length && (
      <div className={styles.mainPageWrapper}>
        <LeftFilerBar />
        <div className={styles.mainPageListWrapper}>
          <TopFilersBar />
          <CardList
            events={upcomingEvents}
            onCardClick={handleCardClick}
            onLikeClick={toggleFavorite}
          />
        </div>
        <ScrollToTopButton />
      </div>
    )
  );
};

export default MainPage;
