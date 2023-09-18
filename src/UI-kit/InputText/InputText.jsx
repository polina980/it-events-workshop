import styles from './styles.module.scss';

const InputText = ({ withForm, name, value, placeholder, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} style={{width: '100%'}}>
      <input
        onChange={onChange}
        name={name}
        type='text'
        value={value || ''}
        placeholder={placeholder}
        className={`${withForm ? styles.inputWithForm : styles.input}`}
        autoComplete='off'
      />
    </form>
  );
};

export default InputText;
