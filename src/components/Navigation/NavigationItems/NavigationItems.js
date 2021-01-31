import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './NavigationItems.module.css';

const navigationItems = () => (
  <ul className={styles.navigationItems}>
    <NavItem link="/" active>Burger Builder</NavItem>
    <NavItem link="/">Checkout</NavItem>
  </ul>
);

export default navigationItems;
