import styles from './styles.module.scss';
import { SearchField } from '../SearchField/SearchField';
import { ReactComponent as Menu } from '../../images/menu.svg';
import { useFiltersContext } from '../../utils/context/SearchFilterContext';

export const MobileSearch = () => {
  const { isFiltersOpen, toggleFilters } = useFiltersContext();
  return (
    <div className={styles.menuContainer}>
      {!isFiltersOpen && <SearchField />}
      <Menu onClick={toggleFilters} className={styles.filterMenu} />
    </div>
  );
};
