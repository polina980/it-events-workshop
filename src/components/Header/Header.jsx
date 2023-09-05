import styles from './styles.module.scss';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import SearchField from '../SearchField/SearchField';
import { ReactComponent as FavoritesIcon } from '../../images/favorites-header-icon.svg';

const smallForm = {
  width: '450px',
  height: '44px',
  marginLeft: '-53px',
  border: '1px solid #C9CCD8',
  borderRadius: '20px',
};

const smallFieldset = {
  gap: '6px',
  marginLeft: '13px',
};

const smallInput = {
  width: '397px',
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isSearchFieldOnTop =
    // location.pathname === '/events' ||
    location.pathname === '/favorites' ||
    location.pathname.includes('event') ||
    location.pathname === '/notifications' ||
    location.pathname === '/privacy';

  const navLinks = [
    {
      id: 1,
      name: 'Избранное',
      path: '/favorites',
      icon: <FavoritesIcon />,
      alt: 'Иконка, Избранное',
    },
  ];

  return (
    <header
      className={styles.header}
    >
      <div className={styles.linksContainer}>
        <Logo />
        {isSearchFieldOnTop && (
          <SearchField
            smallForm={smallForm}
            smallFieldset={smallFieldset}
            smallInput={smallInput}
          />
        )}
        <nav className={styles.navigationBar}>
          {navLinks.map((link) => (
            <NavLink
              className={styles.navLink}
              key={link.id}
              to={link.path ? link.path : ''}
            >
              {link.component ? (
                link.component
              ) : (
                <>
                  {link.icon}
                  <p>{link.name}</p>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
