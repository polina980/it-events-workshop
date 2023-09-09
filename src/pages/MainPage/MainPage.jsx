import styles from './MainPage.module.scss';
import { useEffect } from 'react';
import { useEventsContext } from '../../utils/context/EventsContext';
import { useFiltersContext } from '../../utils/context/SearchFilterContext';
import { CardList } from '../../components/CardList/CardList';
import LeftFilerBar from '../../components/LeftFilterBar/LeftFilterBar';
import MobileSearch from '../../components/MobileSearch/MobileSearch';
import { TopFilterBar } from '../../components/TopFilterBar/TopFilterBar';
import Loader from '../../UI-kit/Loader/Loader';
import useIsMobileResolution from '../../utils/hooks/useIsMobileResolution';
import PaddingWrapper from '../../components/hoc/PaddingWrapper/PaddingWrapper';

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
              <LeftFilerBar />
            ) : (
              <CardList events={upcomingEvents} />
            )}
          </>
        ) : (
          <>
            <LeftFilerBar />
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
