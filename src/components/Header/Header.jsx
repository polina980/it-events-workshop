import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import Logo from '../../UI-kit/Logo/Logo';
import { ReactComponent as FavoritesIcon } from '../../images/favorites-header-icon.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.linksContainer}>
        <Logo />
        <nav className={styles.navigationBar}>
          <Link className={styles.navLink} to='/favorites'>
            <FavoritesIcon />
            <p>Избранное</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
