import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {
  let attachedClasses = [styles.sideDrawer, styles.close];

  if (props.open) {
    attachedClasses = [styles.sideDrawer, styles.open];
  }

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
