import React from 'react';
import styles from './DrawerToggle.module.css';

const drawerToggle = ({ toggleClick }) => (
  <div className={styles.drawerToggle} onClick={toggleClick}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
