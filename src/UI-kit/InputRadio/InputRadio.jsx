import styles from './styles.module.scss';
import PropTypes from 'prop-types'

/** UI component*/
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

InputRadio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node
};

export default InputRadio;

