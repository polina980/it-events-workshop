import React from "react";
import styles from "./styles.module.scss";
import PropTypes from 'prop-types';

const Overlay = ({ onClose }) => {
  return <div className={styles.overlay} onClick={onClose}></div>;
};

Overlay.propTypes = {
  onClose: PropTypes.func
}

export default React.memo(Overlay);
