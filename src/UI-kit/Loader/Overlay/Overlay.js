import React from "react";
import styles from "./styles.module.scss";

const Overlay = ({ onClose }) => {
  return <div className={styles.overlay} onClick={onClose}></div>;
};

export default React.memo(Overlay);
