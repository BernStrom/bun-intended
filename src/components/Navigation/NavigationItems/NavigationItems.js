import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './NavigationItems.module.css';

const navigationItems = (props) => (
  <ul className={styles.navigationItems}>
    <NavItem link="/" exact>
      Burger Builder
    </NavItem>
    {props.isAuthenticated ? <NavItem link="/orders">Orders</NavItem> : null}
    {!props.isAuthenticated ? (
      <NavItem link="/auth">Authenticate</NavItem>
    ) : (
      <NavItem link="/logout">Logout</NavItem>
    )}
  </ul>
);

export default navigationItems;
