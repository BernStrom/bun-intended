import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

const modal = ({ children, isDisplay, isClosed }) => (
  <>
    <Backdrop displaySummary={isDisplay} closeSummary={isClosed} />
    <div
      className={styles.modal}
      style={{
        transform: isDisplay ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: isDisplay ? '1' : '0',
      }}
    >
      {children}
    </div>
  </>
);

export default modal;
