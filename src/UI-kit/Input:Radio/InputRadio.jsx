import styles from './styles.module.scss';

const InputRadio = ({ label, value, name, checked, onChange, children }) => {
  return (
    <label htmlFor={label} className={styles.radioButton}>
      <input
        onChange={onChange}
        id={label}
        type='radio'
        value={value}
        name={name}
        checked={checked}
      />
      <span className={`${label === 'pickdate' && styles.radioText}`}>{value}</span>
      {children}
    </label>
  );
};

export default InputRadio;
