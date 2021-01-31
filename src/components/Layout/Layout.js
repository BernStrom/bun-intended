import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';

const layout = (props) => {
  return (
    <>
      <Toolbar />
      <main className={styles.content}>{props.children}</main>
    </>
  );
};

export default layout;
