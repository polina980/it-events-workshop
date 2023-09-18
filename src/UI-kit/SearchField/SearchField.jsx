import styles from './styles.module.scss';
import { useEventsContext } from '../../utils/context/EventsContext';
import { useFiltersContext } from '../../utils/context/SearchFilterContext';
import SearchInput from '../SearchInput/SearchInput';
import { useFilter } from '../../utils/hooks/useFilter';
import { ReactComponent as Menu } from '../../images/menu.svg';

export const SearchField = () => {
  // Устанавливаем значение в поисковую строку из пропса
  const { handleSearch } = useEventsContext();
  const { values, setValues, getValuesArray, toggleFilters, isFiltersOpen } =
    useFiltersContext();
  const { handleQueryChange } = useFilter({ values, setValues });

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = getValuesArray();
    handleSearch(query);
  };

  return (
    <div
      className={styles.container}
      style={{ justifyContent: isFiltersOpen && 'flex-end' }}
    >
      {!isFiltersOpen && (
        <SearchInput
          withForm
          value={values.query}
          onChange={handleQueryChange}
          name='query'
          placeholder='Разработка'
          onSubmit={handleSubmit}
        />
      )}
      <Menu onClick={toggleFilters} style={{ cursor: 'pointer' }} />
    </div>
  );
};
