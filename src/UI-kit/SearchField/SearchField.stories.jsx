import styles from './styles.module.scss';
import { ReactComponent as Menu } from '../../images/menu.svg';

export default {
  title: 'Components/SearchFieldGroup',
  parameters: {
    componentSubtitle: 'Components > SearchField and MobileSearch',
  },
};

const StoryWrapper = ({ children }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '650px',
      border: '2px dashed black',
      padding: '2em',
    }}
  >
    {children}
  </div>
);

const SearchField = () => (
  <form className={styles.form}>
    <input
      className={styles.formInput}
      placeholder='Разработка'
      type='text'
      autoComplete='off'
    />
  </form>
);

/** Применимость: Pages > DesctopResolution */
export const DesctopSearch = () => {
  return (
    <StoryWrapper>
      <SearchField />
    </StoryWrapper>
  );
};

/** Применимость: Pages > MobileResolution */
export const MobileSearch = () => {
  return (
    <StoryWrapper>
      <SearchField />
      <Menu />
    </StoryWrapper>
  );
};
