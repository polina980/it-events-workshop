import styles from './styles.module.scss';
import { useEffect } from 'react';
import { useEventsContext } from '../../utils/context/EventsContext';
import { useFiltersContext } from '../../utils/context/SearchFilterContext';
import { CardList } from '../../components/CardList/CardList';
import { LeftFilterBar } from '../../components/LeftFilterBar/LeftFilterBar';
import { MobileSearch } from '../../components/MobileSearch/MobileSearch';
import { TopFilterBar } from '../../components/TopFilterBar/TopFilterBar';
import { Loader } from '../../UI-kit/Loader/Loader';
import useIsMobileResolution from '../../utils/hooks/useIsMobileResolution';
import { PaddingWrapper } from '../../UI-kit/PaddingWrapper/PaddingWrapper';

const MainPage = () => {
  const { resetFilters, isFiltersOpen } = useFiltersContext();
  const { isLoading, upcomingEvents } =
    useEventsContext();

  const isMobile = useIsMobileResolution(1080);

  useEffect(() => {
    resetFilters();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    upcomingEvents.length && (
      <div className={styles.page}>
        {isMobile ? (
          <>
            <MobileSearch />
            {isFiltersOpen ? (
              <LeftFilterBar />
            ) : (
              <CardList events={upcomingEvents} />
            )}
          </>
        ) : (
          <>
            <LeftFilterBar />
            <div>
              <TopFilterBar />
              <CardList events={upcomingEvents} />
            </div>
          </>
        )}
      </div>
    )
  );
};

export default PaddingWrapper(MainPage);
