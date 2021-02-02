import React from 'react';
import styles from './Backdrop.module.css';

const backdrop = ({ open, close }) =>
  open ? <div className={styles.backdrop} onClick={close}></div> : null;

export default backdrop;
