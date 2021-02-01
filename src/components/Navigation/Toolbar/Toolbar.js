import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import styles from './Toolbar.module.css';

const toolbar = (props) => (
  <header className={styles.toolbar}>
    <div>MENU</div>
    <div className={styles.logo}>
      <Logo />
    </div>
    <nav className={styles.desktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
