import styles from './styles.module.scss';
import { ReactComponent as RightArrow } from '../../images/Arrows/arrow-right.svg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

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
    </button>
  );
};

PrimaryButton.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  target: PropTypes.string,
  onClick: PropTypes.func,
};

export default PrimaryButton
