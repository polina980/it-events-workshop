import styles from './styles.module.scss';

const InputCheckbox = ({ label, name, value, checked, onChange }) => {
  return (
    <label htmlFor={label}>
      <input
        onChange={onChange}
        id={label}
        name={name}
        value={value}
        type='checkbox'
        className={styles.checkbox}
        checked={checked}
      />
      <span className={styles.checkboxLabel}>{value}</span>
    </label>
  );
};

export default InputCheckbox;
