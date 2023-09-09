import styles from "./styles.module.scss";

export const PaddingWrapper = (WrappedComponent) => {
  return (props) => (
    <div className={styles.wrapper}>
      <WrappedComponent {...props} />
    </div>
  );
};
