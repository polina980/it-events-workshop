import styles from './MobileSearch.module.scss';
import { SearchField } from '../SearchField/SearchField';
import { ReactComponent as Menu } from '../../images/menu.svg';
import { useFiltersContext } from '../../utils/context/SearchFilterContext';

const MobileSearch = () => {
  const { isFiltersOpen, toggleFilters } = useFiltersContext();
  return (
    <div className={styles.menuContainer}>
      {!isFiltersOpen && <SearchField />}
      <div></div>
      <Menu onClick={toggleFilters} className={styles.filterMenu} />
    </div>
  );
};

export default MobileSearch;
