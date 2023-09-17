import clsx from "clsx";
import _ from "lodash";
import styles from "./styles.module.scss";
import Cross from "./../../images/Actions/close.svg";
import PropTypes from 'prop-types';

const TagButton = ({ value, onChange, isEnabled }) => {
  return (
    <button
      onClick={() => onChange(!isEnabled)}
      className={clsx(styles.tagElement, {
        [styles.clicked]: isEnabled
      })}
    >
      {value}
      {isEnabled && <img src={Cross} alt="Cross" />}
    </button>
  );
};

TagButton.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  isEnabled: PropTypes.bool
}

TagButton.defaultProps = {
  isEnabled: false
};

export default TagButton;
