import { useState } from 'react';
import styles from './styles.module.scss';
import LeftFilterBar from './../components/LeftFilterBar/LeftFilterBar';
import { CardList } from '../components/CardList/CardList';
import PageTitle from '../UI-kit/PageTitle/PageTitle';
import { TopFilterBar } from '../components/TopFilterBar/TopFilterBar';
import { useFilterdList } from '../utils/hooks/useFilteredList';
import { useFiltersContext } from '../utils/context/SearchFilterContext';
import { useEventsContext } from '../utils/context/EventsContext';
import PaddingWrapper from '../components/hoc/PaddingWrapper/PaddingWrapper';

const SearchResultPage = () => {
  const { values } = useFiltersContext();
  const { popularEvents, searchResult } = useEventsContext();
  const { filteredList } = useFilterdList({ values, searchResult });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const isNothingFind = !filteredList || filteredList.length === 0;

  const getPageItems = () => {
    console.log(filteredList, 'filteredList');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredList.slice(startIndex, endIndex);
  };

  return (
    <section className={styles.mainPage}>
      <LeftFilterBar />
      <div>
        <TopFilterBar />
        {isNothingFind && (
          <PageTitle
            title="Ничего не нашлось"
            subtitle="Но нам есть, что предложить"
          />
        )}
        <div>
          <CardList events={getPageItems()} />
          {popularEvents.length > itemsPerPage &&
            filteredList.length <= itemsPerPage && (
              <CardList
                title="Популярное"
                events={popularEvents.slice(
                  0,
                  itemsPerPage - filteredList.length
                )}
              />
            )}
        </div>
      </div>
    </section>
  );
};

export default PaddingWrapper(SearchResultPage)