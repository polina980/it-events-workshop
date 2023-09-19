import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { ReactComponent as ArrowUpDown } from '../../images/Arrows/arrow-up-down.svg';

export const SortBar = ({ onSort }) => {
  const [activeSort, setActiveSort] = useState('date');
  const [arrowDirection, setArrowDirection] = useState('up');

  const handleSortClick = (option) => {
    if (onSort) {
      if (activeSort === option) {
        setArrowDirection(arrowDirection === 'up' ? 'down' : 'up');
      } else {
        setActiveSort(option);
        setArrowDirection('up');
      }
      onSort(option);
    }
  };

  const sortOptions = [
    { label: 'Дата', value: 'date' },
    { label: 'Цена', value: 'price' },
    { label: 'Название', value: 'name' },
  ];

  return (
    <>
      <ul className={styles.list}>
        {sortOptions.map((option) => (
          <li key={option.value}>
            <button
              type="button"
              className={`${styles.sortButton} ${activeSort === option.value ? styles.active : ''
                }`}
              onClick={() => {
                handleSortClick(option.value);
              }}
            >
              {option.label}{' '}
              {activeSort === option.value && (
                <span className={styles.arrow}>
                  <ArrowUpDown />
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

SortBar.propTypes = {
  onSort: PropTypes.func,
};
