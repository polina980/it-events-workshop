import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { Logo } from "../../UI-kit/Logo/Logo";
import { ReactComponent as FavoritesIcon } from "../../images/favorites-header-icon.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Link className={styles.link} to="/favorites">
        <FavoritesIcon />
        <spa className={styles.linkSpan}>Избранное</spa>
      </Link>
    </header>
  );
};

export default Header;
