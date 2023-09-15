import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const PopupLink = ({ top, right }) => {
  return (
    <div className={styles.linkPopup} style={{ top: top, right: right }}>
      Ссылка скопирована
    </div>
  );
};

PopupLink.propTypes = {
  top: PropTypes.string,
  right: PropTypes.string,
}

export default PopupLink;
