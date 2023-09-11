import styles from './styles.module.scss';
import { ReactComponent as RightArrow } from '../../images/Arrows/arrow-right.svg';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ title, to, variant, disabled, target, onClick }) => {

  return variant === 'link' ? (
    <Link
      to={variant === 'link' ? to : ''}
      target={target}
      className={styles.primaryLink}
    >
      {title}
      <RightArrow />
    </Link>
  ) : (
    <button
      onClick={onClick}
      type='button'
      className={styles.primaryButton}
      disabled={disabled}
    >
      {' '}
      {title}
      {/* <RightArrow /> */}
    </button>
  );
};

export default PrimaryButton