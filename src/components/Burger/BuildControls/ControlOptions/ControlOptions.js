import React from 'react';
import styles from './ControlOptions.module.css';

const controlOptions = ({ label }) => {
    return (
        <div className={styles.controlOptions}>
            <div className={styles.label}>{label}</div>
            <button className={styles.less}>Less</button>
            <button className={styles.more}>More</button>
        </div>
    );
}

export default controlOptions;