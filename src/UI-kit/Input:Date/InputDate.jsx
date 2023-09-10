import styles from '../Input:Radio/styles.module.scss';

const InputDate = ({ onChange, onBlur }) => {
  return (
    <input
      onChange={onChange}
      className={styles.pickdate}
      name='date'
      type='date'
      onBlur={onBlur}
      min={new Date()}
    />
  );
};

export default InputDate;
