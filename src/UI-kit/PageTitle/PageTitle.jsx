import styles from "./styles.module.scss";

export const PageTitle = ({ title, subtitle, size }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} style={{ fontSize: size }}>
        {title}
      </h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};
