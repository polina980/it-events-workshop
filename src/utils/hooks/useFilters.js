import { useState } from "react";

const useFilters = () => {
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

  const [findValues, setFindValues] = useState(null);
  const [values, setValues] = useState(initialValues);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

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
    const valuesArray = Object.values(values);
    const stringValuesArray = valuesArray.reduce((acc, value) => {
      if (typeof value === "string") {
        acc.push(value);
      } else if (Array.isArray(value)) {
        const stringItems = value.filter((item) => typeof item === "string");
        acc = acc.concat(stringItems);
      }
      return acc;
    }, []);
    return stringValuesArray;
  };

  return {
    findValues,
    setFindValues,
    values,
    setValues,
    resetFilters,
    isFiltersOpen,
    toggleFilters,
    closeFilters,
    getValuesArray
  };
};

export default useFilters;
