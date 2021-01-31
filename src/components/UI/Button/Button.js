import React from 'react';
import styles from './Button.module.css';

const button = ({ children, btnType, checkoutOption }) => (
  <button className={[styles.button, styles[btnType]].join(' ')} onClick={checkoutOption}>
    {children}
  </button>
);

export default button;
