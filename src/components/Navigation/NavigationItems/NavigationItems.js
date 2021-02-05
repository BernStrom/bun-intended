import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './NavigationItems.module.css';

const navigationItems = () => (
  <ul className={styles.navigationItems}>
    <NavItem link="/" exact>Burger Builder</NavItem>
    <NavItem link="/orders">Orders</NavItem>
  </ul>
);

export default navigationItems;
