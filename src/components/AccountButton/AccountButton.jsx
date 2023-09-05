import styles from './AccountButton.module.css';
import { Link } from 'react-router-dom';

const AccountButton = ({
  title,
  to,
  disabled,
  onClick,
  isActive,
  imageSrc,
  name,
}) => {
  return (
    <Link
      className={`${styles.accountButton} ${isActive ? styles.active : ''} ${
        name === 'exit' ? styles.exitButton : ''
      }`}
      to={to}
      disabled={disabled}
      onClick={onClick}
    >
      {imageSrc}
      {/* <img src={imageSrc} alt="icon" /> */}
      {title}
    </Link>
  );
};

export default AccountButton;
