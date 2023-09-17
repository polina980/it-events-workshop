import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../UI-kit/Logo/Logo";
import { ReactComponent as FavoritesIcon } from "../../images/favorites-header-icon.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>
      <Link className={styles.link} to="/favorites">
        <FavoritesIcon />
        <span>Избранное</span>
      </Link>
    </header>
  );
};
