import styles from './styles.module.scss';

const Input = ({ name, value, placeholder, onChange }) => {
  return (
    <input
      onChange={onChange}
      name={name}
      type='text'
      value={value || ''}
      placeholder={placeholder}
      className={styles.input}
      autoComplete='off'
    />
  );
};

export default Input;
