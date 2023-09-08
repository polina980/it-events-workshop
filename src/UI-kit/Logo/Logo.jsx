import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const Logo = ({ logoSize, onClick }) => {
  return (
    <Link to="/" className={styles.logoLink} style={logoSize} onClick={onClick}>
      Connect<span> &#123;IT&#125;</span>
    </Link>
  );
};
