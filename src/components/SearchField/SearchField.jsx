import styles from './styles.module.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useEventsContext } from '../../utils/context/EventsContext';

const SearchField = ({ smallInput }) => {
  // Устанавливаем значение в поисковую строку из пропса
  const { handleSearch, searchQuery, setSearchQuery } = useEventsContext();
  const location = useLocation();
  const isResultsPage = location.pathname === '/results';
  const placeholder =
    isResultsPage && typeof query !== 'string'
      ? ''
      : 'Разработка';


  // Чтобы поисковая строка была заполнена результатом только на странице results
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimQuery = searchQuery.trim();
    handleSearch(trimQuery);
  };

  return (
      <input
        className={styles.input}
        placeholder={placeholder}
        onChange={handleChange}
        value={searchQuery || ''}
        type="text"
        style={smallInput}
      />
  );
};

export default SearchField;
