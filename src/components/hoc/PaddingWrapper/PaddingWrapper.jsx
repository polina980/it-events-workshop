import styles from './PaddingWrapper.module.scss';

const PaddingWrapper = (WrappedComponent) => {
  return (props) => (
    <div className={styles.wrapper}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default PaddingWrapper;
