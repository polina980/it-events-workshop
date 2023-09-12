import styles from '../RadioButton/styles.module.scss';

const DateField = ({ onChange, onBlur }) => {
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

export default DateField;
