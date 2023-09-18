import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { ReactComponent as ArrowUp } from '../../images/Arrows/arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../images/Arrows/arrow-down.svg';

export const FilterBar = ({ onFilter }) => {
  FilterBar.propTypes = {
    onFilter: PropTypes.func,
  };

  const [activeFilter, setActiveFilter] = useState('date');
  const [arrowDirection, setArrowDirection] = useState('up');

  const handleFilterClick = (option) => {
    if (onFilter) {
      if (activeFilter === option) {
        setArrowDirection(arrowDirection === 'up' ? 'down' : 'up');
      } else {
        setActiveFilter(option);
        setArrowDirection('up');
      }
      onFilter(option);
    }
  };

  useEffect(() => {
    onFilter(activeFilter);
  }, []);

  const filterOptions = [
    { label: 'Дата', value: 'date' },
    { label: 'Цена', value: 'price' },
    { label: 'Название', value: 'name' },
  ];

  return (
    <>
      <ul className={styles.list}>
        {filterOptions.map((option) => (
          <li key={option.value}>
            <button
              type="button"
              className={`${styles.filterButton} ${activeFilter === option.value ? styles.active : ''
                }`}
              onClick={() => {
                handleFilterClick(option.value);
              }}
            >
              {option.label}{' '}
              {activeFilter === option.value && (
                <span className={styles.arrow}>
                  {arrowDirection === 'up' ? <ArrowUp /> : <ArrowDown />}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.divider}></div>
    </>
  );
};
