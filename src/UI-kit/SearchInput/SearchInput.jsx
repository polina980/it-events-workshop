import styles from './styles.module.scss';
import PropTypes from 'prop-types';

/** UI Component */
const SearchInput = ({ withForm, name, value, placeholder, onChange, onSubmit }) => {
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

SearchInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchInput;
