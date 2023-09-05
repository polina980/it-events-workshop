import React from 'react';
import styles from './styles.module.scss';

const ModalOverlay = ({ onClose, style }) => {
  return <div className={styles.overlay} onClick={onClose} style={style}></div>;
};

export default React.memo(ModalOverlay);
