import styles from "./styles.module.scss";
import PropTypes from 'prop-types'

export const FilterBar = ({ onFilter }) => {

  FilterBar.propTypes = {
    onFilter: PropTypes.func
  }
  
  const handleFilterClick = (option) => {
    if (onFilter) {
      onFilter(option);
    }
  };

  return (
    <>
      <ul className={`${styles.list}`}>
        <li className={styles.item}>
          <button
            type="button"
            className={styles.filterButton}
            onClick={() => {
              handleFilterClick("name");
            }}
          >
            Название
          </button>
        </li>
        <li className={styles.item}>
          <button
            type="button"
            className={styles.filterButton}
            onClick={() => {
              handleFilterClick("date");
            }}
          >
            Дата
          </button>
        </li>
        <li className={styles.item}>
          <button
            type="button"
            className={styles.filterButton}
            onClick={() => {
              handleFilterClick("price");
            }}
          >
            Цена
          </button>
        </li>
      </ul>
      <div className={styles.divider}></div>
    </>
  );
};
