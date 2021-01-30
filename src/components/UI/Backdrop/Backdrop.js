import React from 'react';
import styles from './Backdrop.module.css';

const backdrop = ({ displaySummary, closeSummary }) =>
  displaySummary && <div className={styles.backdrop} onClick={closeSummary}></div>;

export default backdrop;
