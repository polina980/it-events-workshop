import styles from './SearchField.module.css';
import {  useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useFiltersContext } from '../../utils/context/SearchFilterContext';
import { useEventsContext } from '../../utils/context/EventsContext';

const SearchField = () => {
  // Устанавливаем значение в поисковую строку из Пропса
  const { handleSearch, searchQuery, setSearchQuery } = useEventsContext();
  const { values, setValues } = useFiltersContext()
  const location = useLocation();
  const isResultsPage = location.pathname === '/results';
  const placeholder =
    isResultsPage && typeof query !== 'string'
      ? ''
      : 'Разработка';


  // Чтобы чертова поисковая строка была заполнена результатом только на странице results
  // - Рома, не ругавси
  useEffect(() => {
    if (isResultsPage) {
      setSearchQuery(searchQuery);
    } else {
      setSearchQuery('');
    }
  }, [location]);
  console.log(searchQuery)

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    setValues(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimQuery = searchQuery.trim();
    handleSearch(trimQuery);
  };

  return (
    // <form
    //   className={styles.form}
    //   onSubmit={handleSubmit}
    //   style={smallForm || radiusForm}
    // >
    <>
      <input
        className={styles.input}
        placeholder={placeholder}
        onChange={handleChange}
        value={searchQuery || ''}
        type="text"
        name='query'
      />
    </>
    // </form>
  );
};

export default SearchField;
