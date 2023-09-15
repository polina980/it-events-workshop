import styles from './styles.module.scss';

const InputText = ({ name, value, placeholder, onChange }) => {
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

export default InputText;
