import { useState, useCallback } from 'react';
import { motion as m } from 'framer-motion';
import { filtersVariants } from '../../utils/motion';
import styles from './styles.module.scss';
import { TagSection } from './../TagSection/TagSection';
import { useFilter } from '../../utils/hooks/useFilter';
import { useEventsContext } from '../../utils/context/EventsContext';
import { useInitialFilter } from '../../utils/hooks/useInitialFilter';
import { useFiltersContext } from '../../utils/context/SearchFilterContext';
import {
  SearchInput,
  InputCheckbox,
  InputDate,
  InputRadio,
  PrimaryButton,
  TagButton,
} from '../../UI-kit';

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
      <>
        <InputRadio
          key={option.id}
          label={option.id}
          value={option.label}
          name='date'
          checked={
            option.label.includes(values.date) ||
            (option.label === 'Выбрать дату' && !isNaN(Date.parse(values.date)))
          }
          onChange={handleInputChange}
        >
          {option.id === 'pickdate' && (
            <InputDate onChange={handleDateChange} onBlur={handleDateBlur} />
          )}
        </InputRadio>
      </>
    ));
  };

  const renderSpecialityList = () => {
    return dataLists?.topics
      ?.slice(0, showAllTopics ? dataLists.topics.length : 4)
      .map((item, index) => (
        <InputCheckbox
          key={index}
          label={item.id}
          name='specialities'
          value={item}
          checked={values.specialities.includes(item)}
          onChange={handleInputChange}
        />
      ));
  };

  const FiltersListItem = useCallback(
    ({ title, children }) => (
      <li className={styles.listItem}>
        <p className={styles.itemTitle}>{title}</p>
        {children}
      </li>
    ),
    []
  );

  return (
    <m.section
      variants={filtersVariants}
      initial='hidden'
      animate='visible'
      className={styles.filterForm}
    >
      <h2 className={styles.filterTitle}>Фильтры</h2>
      <ul className={styles.filterList}>
        <FiltersListItem title='Название'>
          <SearchInput
            placeholder='Разработка'
            name='query'
            value={values.query}
            onChange={handleQueryChange}
          />
        </FiltersListItem>

        <FiltersListItem title='Формат'>
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
        </FiltersListItem>

        <FiltersListItem title='Город'>
          <SearchInput
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
        </FiltersListItem>

        <FiltersListItem title='Дата'>
          {renderDateOptions()}
          <button onClick={toggleShowAllDates} className={styles.showMore}>
            {showAllDates ? 'Показать меньше' : 'Показать больше'}
          </button>
        </FiltersListItem>

        <FiltersListItem title='Направление'>
          {renderSpecialityList()}
          {dataLists?.topics?.length > 3 && (
            <button onClick={toggleShowAllTopics} className={styles.showMore}>
              {showAllTopics ? 'Показать меньше' : 'Показать больше'}
            </button>
          )}
        </FiltersListItem>

        <FiltersListItem title='Цена'>
          <InputRadio
            label='free'
            value='Бесплатно'
            name='price'
            checked={values.price === 'Бесплатно'}
            onChange={handleInputChange}
          />
          <InputRadio
            label='paid'
            value='Платно'
            name='price'
            checked={values.price === 'Платно'}
            onChange={handleInputChange}
          />
        </FiltersListItem>

        <FiltersListItem title='Теги'>
          <SearchInput
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
                      onChange={handleButtonChange(item)}
                    // disabled={false}
                    />
                  );
                })}
              </div>
            </div>
          )}
          <span className={styles.popularTags}>Популярные теги</span>
        </FiltersListItem>
      </ul>
      <TagSection handleChange={handleButtonChange} />
      <PrimaryButton onClick={handleSearchClick} title='Найти' />
    </m.section>
  );
};
