import React from 'react';
import styles from './ControlOptions.module.css';

const controlOptions = ({ label, addItem, removeItem, isDisabled }) => {
  return (
    <div className={styles.controlOptions}>
      <div className={styles.label}>{label}</div>
      <button className={styles.less} onClick={removeItem} disabled={isDisabled}>
        Less
      </button>
      <button className={styles.more} onClick={addItem}>
        More
      </button>
    </div>
  );
};

export default controlOptions;
