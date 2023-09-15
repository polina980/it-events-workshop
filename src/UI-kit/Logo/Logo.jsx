import styles from "./styles.module.scss";
import PropTypes from 'prop-types';

const Logo = ({ fontSize, color, onClick }) => {
  return (
    <div
      className={styles.logoLink}
      style={{ fontSize: fontSize, color: color }}
      onClick={onClick}
    >
      Connect<span> &#123;IT&#125;</span>
    </div>
  );
};

Logo.propTypes = {
  fontSize: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Logo;
