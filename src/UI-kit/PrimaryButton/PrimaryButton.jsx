import styles from "./styles.module.scss";
import { ReactComponent as RightArrow } from "../../images/Arrows/arrow-right.svg";
import { Link } from "react-router-dom";

export const PrimaryButton = ({ title, to, target, disabled, style, onClick }) => {
  return (
    <Link
      className={styles.primaryButton}
      to={to}
      target={target || ""}
      disabled={disabled}
      style={style}
      onClick={onClick}
    >
      {title}
      <RightArrow />
      {/* <figure className={styles.figure}>
        <img src={RightArrow} alt="Arrow" />
      </figure> */}
    </Link>
  );
};
