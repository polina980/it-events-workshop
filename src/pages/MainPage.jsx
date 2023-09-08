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
import useIsMobileResolution from '../utils/hooks/useIsMobileResolution';
import { SearchField } from '../components/SearchField/SearchField';
import PaddingWrapper from '../components/hoc/PaddingWrapper/PaddingWrapper';

 const MainPage = () => {
  const { resetFilters } = useFiltersContext();
  const { isLoading, upcomingEvents, handleCardClick, toggleFavorite } =
    useEventsContext();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const isMobile = useIsMobileResolution(992);
  useEffect(() => {
    resetFilters();
  }, []);

  //const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isLoading) {
    return <Loader />;
  }
  const toggleMenu = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  return (
    upcomingEvents.length && (
      <div className={styles.mainPage}>
        {isMobile ? (
          <>
            <div className={styles.container}>
              <SearchField />
              <Menu onClick={toggleMenu} />
            </div>
            {isFiltersOpen ? (
              <LeftFilerBar />
            ) : (
              <CardList
                events={upcomingEvents}
                onCardClick={handleCardClick}
                onLikeClick={toggleFavorite}
              />
            )}
          </>
        ) : (
          <>
            <LeftFilerBar />
            <TopFilterBar />
            <CardList
              events={upcomingEvents}
              onCardClick={handleCardClick}
              onLikeClick={toggleFavorite}
            />
          </>
        )}
        {/* <ScrollToTopButton /> */}
      </div>
    )
  );
};

export default PaddingWrapper(MainPage)
