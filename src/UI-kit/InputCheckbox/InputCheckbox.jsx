import styles from './styles.module.scss';
import PropTypes from 'prop-types';

/** UI component*/
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

InputCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default InputCheckbox;
