import { useState } from 'react';
import { motion as m } from 'framer-motion';
import styles from './styles.module.scss';
import { TagButton } from '../../UI-kit/TagButton/TagButton';
import { TagSection } from './../TagSection/TagSection';
import { useFilter } from '../../utils/hooks/useFilter';
import { useEventsContext } from '../../utils/context/EventsContext';
import { useInitialFilter } from '../../utils/hooks/useInitialFilter';
import { useFiltersContext } from '../../utils/context/SearchFilterContext';
import Input from '../../UI-kit/Input: TextSearch/Input';
import InputCheckbox from '../../UI-kit/Input: Checkbox/InputCheckbox';

export const LeftFilterBar = () => {
  const [showAllDates, setShowAllDates] = useState(false);
  const [showAllTopics, setShowAllTopics] = useState(false);
  const { dataLists } = useInitialFilter();
  const { handleSearch } = useEventsContext();
  const { values, setValues, findValues, setFindValues, closeFilters } =
    useFiltersContext();

  const {
    handleQueryChange,
    handleInputChange,
    handleDateChange,
    handleDateBlur,
    handleButtonChange,
    setItemOnClick,
  } = useFilter({
    values,
    setValues,
    findValues,
    setFindValues,
  });

  const handleSearchClick = () => {
    handleSearch(values.query);
    closeFilters();
  };

  const toggleShowAllDates = () => {
    setShowAllDates(!showAllDates);
  };

  const toggleShowAllTopics = () => {
    setShowAllTopics(!showAllTopics);
  };

  const renderDateOptions = () => {
    const dateOptions = [
      { id: 'today', value: 'Today', label: 'Сегодня' },
      { id: 'tomorrow', value: 'Tomorrow', label: 'Завтра' },
      { id: 'thisweekend', value: 'This weekend', label: 'В эти выходные' },
      { id: 'pickdate', value: 'Pick date', label: 'Выбрать дату' },
    ];

    if (showAllDates) {
      dateOptions.push(
        { id: 'thisweek', value: 'This week', label: 'На этой неделе' },
        { id: 'thismonth', value: 'This month', label: 'В этом месяце' },
        { id: 'nextmonth', value: 'Next month', label: 'В следующем месяце' }
      );
    }

    return dateOptions.map((option) => (
      <label htmlFor={option.id} className={styles.radioButton} key={option.id}>
        <input
          onChange={handleInputChange}
          id={option.id}
          type='radio'
          value={option.label}
          name='date'
          checked={
            option.label.includes(values.date) ||
            (option.label === 'Выбрать дату' && !isNaN(Date.parse(values.date)))
          }
        />
        <span className={`${option.id === 'pickdate' && styles.radioText}`}>
          {option.label}
        </span>
        {option.id === 'pickdate' && (
          <input
            onChange={handleDateChange}
            className={styles.pickdate}
            name='date'
            type='date'
            onBlur={handleDateBlur}
            min={new Date()}
          ></input>
        )}
      </label>
    ));
  };

  const renderSpecialityList = () => {
    return dataLists?.topics
      ?.slice(0, showAllTopics ? dataLists.topics.length : 4)
      .map((item) => (
        <InputCheckbox
          key={item.id}
          label={item.id}
          name='specialities'
          value={item}
          checked={values.specialities.includes(item)}
          onChange={handleInputChange}
        />
      ));
  };

  return (
    <m.section
      initial={{ x: -100, opacity: 0 }} // начальное состояние - смещение влево на 100 пикселей
      animate={{ x: 0, opacity: 1 }} // конечное состояние - без смещения
      transition={{ duration: 0.7 }} // длительность анимации
      className={styles.filterForm}
    >
      <h2 className={styles.filterTitle}>Фильтры</h2>
      <ul className={styles.filterList}>
        <li className={styles.listItem}>
          <p className={styles.itemTitle}>Название</p>
          <Input
            placeholder='Разработка'
            name='query'
            value={values.query}
            onChange={handleQueryChange}
          />
        </li>
        <li className={styles.listItem}>
          <p className={styles.itemTitle}>Формат</p>
          <InputCheckbox
            label='online'
            value='Online'
            name='status'
            checked={values.status.includes('Online')}
            onChange={handleInputChange}
          />
          <InputCheckbox
            label='offline'
            value='Offline'
            name='status'
            checked={values.status.includes('Offline')}
            onChange={handleInputChange}
          />
        </li>
        <li className={styles.listItem}>
          <p className={styles.itemTitle}>Город</p>
          <Input
            placeholder='Поиск города'
            name='city'
            value={values.city}
            onChange={handleInputChange}
          />
          {findValues && findValues.city && findValues.city !== '' && (
            <div className={styles.serchContainer}>
              {findValues.city.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setItemOnClick({ city: item })}
                    className={styles.findItem}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          )}
        </li>
        <li className={styles.listItem}>
          <p className={styles.itemTitle}>Дата</p>
          {renderDateOptions()}
          <button onClick={toggleShowAllDates} className={styles.showMore}>
            {showAllDates ? 'Показать меньше' : 'Показать больше'}
          </button>
        </li>
        <li className={styles.listItem}>
          <p className={styles.itemTitle}>Направление</p>
          {renderSpecialityList()}
          {dataLists?.topics?.length > 3 && (
            <button onClick={toggleShowAllTopics} className={styles.showMore}>
              {showAllTopics ? 'Показать меньше' : 'Показать больше'}
            </button>
          )}
        </li>
        <li className={styles.listItem}>
          <p className={styles.itemTitle}>Цена</p>
          <label htmlFor='free' className={styles.radioButton}>
            <input
              onChange={handleInputChange}
              id='free'
              type='radio'
              value='Бесплатно'
              name='price'
              checked={values.price === 'Бесплатно'}
            />
            <span>Бесплатно</span>
          </label>
          <label htmlFor='paid' className={styles.radioButton}>
            <input
              onChange={handleInputChange}
              id='paid'
              type='radio'
              value='Платно'
              name='price'
              checked={values.price === 'Платно'}
            />
            <span>Платно</span>
          </label>
        </li>
        <li className={styles.listItem}>
          <p className={styles.itemTitle}>Теги</p>
          <Input
            placeholder='Поиск тега'
            name='findTags'
            value={values.findTags}
            onChange={handleInputChange}
          />
          {findValues && findValues.findTags && findValues.findTags !== '' && (
            <div className={styles.serchContainer}>
              <div className={styles.tagsList}>
                {findValues.findTags.map((item, index) => {
                  return (
                    <TagButton
                      key={index}
                      value={item}
                      handleChange={handleButtonChange}
                      disabled={false}
                    />
                  );
                })}
              </div>
            </div>
          )}
          <span className={styles.popularTags}>Популярные теги</span>
        </li>
      </ul>
      <TagSection handleChange={handleButtonChange} />
      <button
        onClick={handleSearchClick}
        className={styles.buttonSearch}
        type='button'
      >
        Найти
      </button>
    </m.section>
  );
};
