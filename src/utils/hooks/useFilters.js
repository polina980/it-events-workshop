import {useCallback, useState} from "react";

const initialValues = {
  query: "",
  status: [],
  city: null,
  date: null,
  specialities: [],
  price: null,
  findTags: null,
  tags: [],
};

const useFilters = () => {
  const [findValues, setFindValues] = useState(null);
  const [values, setValues] = useState(initialValues);
  const [filters, setFilters] = useState({});
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const isEmptyValue = (v) => v === null || v === "" || v === undefined;

  const getFilterValues = () => {
    return Object
        .keys(filters)
        .filter(k => !isEmptyValue(filters[k]))
        .reduce((acc, cur) => Object
            .assign(acc, {
              [cur]: filters[cur]
            }), {});
  };

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  const closeFilters = () => {
    setIsFiltersOpen(false)
  }

  const resetFilters = () => {
    setValues(initialValues);
  };

  const getValuesArray = () => {
    return Object.values(values).reduce((acc, value) => {
      if (typeof value === "string") {
        acc.push(value);
      } else if (Array.isArray(value)) {
        const stringItems = value.filter((item) => typeof item === "string");
        acc = acc.concat(stringItems);
      }
      return acc;
    }, []);
  };

  return {
    findValues,
    setFindValues,
    values,
    setValues,
    getFilterValues,
    filters,
    setFilters,
    resetFilters,
    isFiltersOpen,
    toggleFilters,
    closeFilters,
    getValuesArray
  };
};

export default useFilters;
