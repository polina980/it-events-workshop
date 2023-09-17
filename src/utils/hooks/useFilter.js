import { useState } from "react";
import debounce from "../debounce";
import { useInitialFilter } from "./useInitialFilter";
import { useEventsContext } from "../context/EventsContext";

export function useFilter({ values, setValues, setFindValues }) {
  const { dataLists } = useInitialFilter();
  const [date, setDate] = useState(null);
  const { setSearchQuery } = useEventsContext();

  const handleFilter = ({ name, value }) => {
    const searchList = dataLists[name]?.map((item) => item?.toLowerCase());
    const debouncedSetFindValues = debounce((data) => setFindValues(data), 500);

    if (searchList && value !== "") {
      const findValue = searchList.filter((el) => {
        return el.search(value.toLowerCase()) === 0;
      });

      if (findValue.length > 0) {
        debouncedSetFindValues({ [name]: findValue });
      } else debouncedSetFindValues(null);
    } else debouncedSetFindValues(null);
  };

  const handleQueryChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setSearchQuery(value);
  };

  const handleInputChange = (event) => {
    const input = event.currentTarget;
    const name = input.name;
    const value = input.value;

    if (name === "specialities" || name === "status") {
      const includes = values[name].includes(value);

      if (includes) {
        setValues({
          ...values,
          [name]: values[name].filter((el) => el !== value),
        });
      } else {
        setValues({ ...values, [name]: [...values[name], value] });
      }
    } else if (date && value === "Выбрать дату") {
      setValues({ ...values, date: date });
    } else {
      setValues({ ...values, [name]: value });
      handleFilter({ name, value });
    }
  };

  const handleDateChange = (event) => {
    const input = event.currentTarget;
    const name = input.name;
    const value = input.value;

    if (value !== "") {
      setDate(value);
      setValues({ ...values, [name]: value });
    } else {
      setDate(null);
      setValues({ ...values, [name]: null });
    }
  };

  const handleButtonChange = (tag) => (isEnabled) => {
    if (!isEnabled) {
      setValues({
        ...values,
        tags: values.tags.filter((el) => el !== tag),
      });
    } else {
      setValues({ ...values, tags: [...values.tags, tag] });
    }
  };

  const setItemOnClick = (item) => {
    setValues({ ...values, ...item });
    setFindValues(null);
  };

  const deleteValue = (item) => {
    if (item === "status" || item === "tags" || item === "specialities") {
      setValues({ ...values, [item]: [] });
    } else setValues({ ...values, [item]: null });
  };

  const handleDateBlur = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    const selectedDate = values.date;

    // Проверяем, выбрана ли дата до конца
    if (selectedDate === "") {
      // Дата не выбрана
      // Устанавливаем open в true, чтобы календарь не закрывался
      setValues({ ...values, date: "", open: true });
    } else if (selectedDate > currentDate) {
      // Выбранная дата позже текущей даты
      // Выполняем соответствующие действия
      //console.log("Выбранная дата позже текущей даты:", selectedDate);
      setValues({ ...values, open: false });
    } else {
      // Выбранная дата до или равна текущей дате
      // Выполняем соответствующие действия
      //console.log("Выбранная дата до или равна текущей дате:", selectedDate);
      setValues({ ...values, open: false });
    }
  };

  return {
    handleQueryChange,
    handleInputChange,
    handleButtonChange,
    setItemOnClick,
    deleteValue,
    handleDateChange,
    handleDateBlur,
  };
}
