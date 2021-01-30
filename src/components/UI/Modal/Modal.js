import React from 'react';
import styles from './Modal.module.css';

const modal = ({ children, display }) => (
  <div
    className={styles.modal}
    style={{
      transform: display ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: display ? '1' : '0',
    }}
  >
    {children}
  </div>
);

export default modal;
