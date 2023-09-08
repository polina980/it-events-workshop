import styles from "./styles.module.scss";

export const PopupLink = ({ top, right }) => {
  return (
    <div className={styles.linkPopup} style={{ top: top, right: right }}>
      Ссылка скопирована
    </div>
  );
};
