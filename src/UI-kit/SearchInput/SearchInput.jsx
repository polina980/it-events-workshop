import styles from './styles.module.scss';
import PropTypes from 'prop-types'

/** UI Component */
const SearchInput = ({ name, value, placeholder, onChange }) => {
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

SearchInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

export default SearchInput;
