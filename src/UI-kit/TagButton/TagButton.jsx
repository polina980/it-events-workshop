import styles from "./styles.module.scss";
import Cross from "./../../images/Actions/close.svg";
import PropTypes from 'prop-types';

const TagButton = ({ values, value, handleChange }) => {
  
  const handleClick = (value) => {
    handleChange({ tags: value });
  };

  return (
    <button
      onClick={() => handleClick(value)}
      className={`${styles.tagElement} ${values?.tags?.includes(value) ? styles.clicked : ""
        }`}
    >
      {value}
      {values?.tags?.includes(value) && <img src={Cross} alt="Cross" />}
    </button>
  );
};

TagButton.propTypes = {
  values: PropTypes.object,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}

export default TagButton;
