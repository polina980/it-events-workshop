import styles from './styles.module.scss';
import { ReactComponent as Menu } from '../../images/menu.svg';
export default {
  title: 'Components/SearchFieldGroup',
  parameters: {
    componentSubtitle: 'Components > SearchField and MobileSearch'
  }
};

/** Применимость: Pages > MobileResolution*/
export const MobileSearch = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <SearchField />
      <Menu />
    </div>
  );
};
/** Применимость: Pages > DesctopResolution */
export const SearchField = () => {
  return (
    <form className={styles.form}>
      <input
        className={styles.formInput}
        placeholder='Разработка'
        type='text'
        autoComplete='off'
      />
    </form>
  );
};

