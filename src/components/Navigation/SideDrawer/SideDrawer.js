import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './SideDrawer.module.css';

const sideDrawer = ({ isOpen, isClosed }) => {
  let attachedStyles = [styles.sideDrawer, styles.close];
  if (isOpen) attachedStyles = [styles.sideDrawer, styles.open];

  return (
    <>
      <Backdrop open={isOpen} close={isClosed} />
      <div className={attachedStyles.join(' ')}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
