import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.module.css';

const checkoutSummary = ({ ingredients }) => {
  return (
    <div className={styles.checkoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType="Danger" checkoutOption>
        CANCEL
      </Button>
      <Button btnType="Success" checkoutOption>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
