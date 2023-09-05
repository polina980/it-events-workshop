import styles from './styles.module.scss';

const PopupLink = ({ top, right }) => {
  return (
    <div className={styles.linkPopup} style={{ top: top, right: right }}>
      Ссылка скопирована
    </div>
  );
};

export default PopupLink;
