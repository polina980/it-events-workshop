import styles from "./styles.module.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useEventsContext } from "../../utils/context/EventsContext";
import { useFiltersContext } from "../../utils/context/SearchFilterContext";
import SearchInput from "../SearchInput/SearchInput";
import { useFilter } from "../../utils/hooks/useFilter";

export const SearchField = () => {
  // Устанавливаем значение в поисковую строку из пропса
  const { handleSearch, searchQuery, setSearchQuery } = useEventsContext();
  const { values, setValues, getValuesArray } = useFiltersContext()
  const { handleQueryChange } = useFilter({ values, setValues })


  const location = useLocation();
  const isResultsPage = location.pathname === "/results";
  const placeholder =
    isResultsPage && typeof query !== "string" ? "" : "Разработка";

  // Чтобы поисковая строка была заполнена результатом только на странице results
  // useEffect(() => {
  //   if (isResultsPage) {
  //     setSearchQuery(values.query);
  //   } else {
  //     setSearchQuery("");
  //   }
  // }, [location]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setSearchQuery(value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault()
    const query = getValuesArray()
    console.log(query)
    handleSearch(query);
  };

  return (
    <SearchInput 
      withForm
      value={values.query}
      onChange={handleQueryChange}
      name='query'
      placeholder='Разработка'
      onSubmit={handleSubmit}
    />
    // <form onSubmit={handleSubmit} className={styles.form}>
    //   <input
    //     className={styles.formInput}
    //     placeholder={placeholder}
    //     onChange={handleChange}
    //     value={values.query || ''}
    //     type="text"
    //     autoComplete="off"
    //   />
    // </form>
  );
};
