import React from 'react';
import styles from './NavItem.module.css';

const navItem = ({ children, link, active }) => (
  <li className={styles.navItem}>
    <a href={link} className={active && styles.active}>
      {children}
    </a>
  </li>
);

export default navItem;
