import React from 'react';
import brandLogo from '../../assets/images/bun-intended-logo.png';
import styles from './Logo.module.css';

const Logo = (props) => (
  <div className={styles.logo}>
    <img src={brandLogo} alt="Bun intended" />
  </div>
);

export default Logo;
