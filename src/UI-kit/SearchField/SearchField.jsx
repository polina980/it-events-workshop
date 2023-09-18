import { useEventsContext } from "../../utils/context/EventsContext";
import { useFiltersContext } from "../../utils/context/SearchFilterContext";
import SearchInput from "../SearchInput/SearchInput";
import { useFilter } from "../../utils/hooks/useFilter";

export const SearchField = () => {
  // Устанавливаем значение в поисковую строку из пропса
  const { handleSearch} = useEventsContext();
  const { values, setValues, getValuesArray } = useFiltersContext()
  const { handleQueryChange } = useFilter({ values, setValues })



  
  const handleSubmit = (e) => {
    e.preventDefault()
    const query = getValuesArray()
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
  );
};
