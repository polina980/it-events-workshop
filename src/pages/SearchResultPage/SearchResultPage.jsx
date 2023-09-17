import { useState } from 'react';
import styles from './styles.module.scss';

import { MobileSearch } from '../../components/MobileSearch/MobileSearch';
import { LeftFilterBar } from '../../components/LeftFilterBar/LeftFilterBar';
import { CardList } from '../../components/CardList/CardList';
import { PageTitle, Loader, PaddingWrapper } from '../../UI-kit';
import { TopFilterBar } from '../../components/TopFilterBar/TopFilterBar';
import { useFilterdList } from '../../utils/hooks/useFilteredList';
import { useFiltersContext } from '../../utils/context/SearchFilterContext';
import { useEventsContext } from '../../utils/context/EventsContext';
import useIsMobileResolution from '../../utils/hooks/useIsMobileResolution';

const SearchResultPage = () => {
  const { values, isFiltersOpen } = useFiltersContext();
  const { popularEvents, searchResult, isLoading } = useEventsContext();
  const { filteredList } = useFilterdList({ values, searchResult });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const isNothingFind = !filteredList || filteredList.length === 0;
  const isMobile = useIsMobileResolution(1080);

  const getPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredList.slice(startIndex, endIndex);
  };

  const NothingFoundMessage = () => (
    <PageTitle
      title='Ничего не нашлось'
      subtitle='Но нам есть, что предложить'
    />
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.page}>
      {isMobile ? (
        <>
          <MobileSearch />
          {isFiltersOpen ? (
            <LeftFilterBar />
          ) : (
            <>
              {isNothingFind && <NothingFoundMessage />}
              <CardList events={getPageItems()} />
              {popularEvents.length > itemsPerPage &&
                filteredList.length <= itemsPerPage && (
                  <CardList
                    title='Популярное'
                    events={popularEvents.slice(
                      0,
                      itemsPerPage - filteredList.length
                    )}
                  />
                )}
            </>
          )}
        </>
      ) : (
        <>
          <LeftFilterBar />
          <div>
            <TopFilterBar />
            {isNothingFind && <NothingFoundMessage />}
            <CardList events={getPageItems()} />
            {popularEvents.length > itemsPerPage &&
              filteredList.length <= itemsPerPage && (
                <CardList
                  title='Популярное'
                  events={popularEvents.slice(
                    0,
                    itemsPerPage - filteredList.length
                  )}
                />
              )}
          </div>
        </>
      )}
    </div>
  );
};

export default PaddingWrapper(SearchResultPage);
