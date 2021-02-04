import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';

export default class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  };

  render() {
    return (
      <div className={styles.contactData}>
        <h4>Enter your Contact Data</h4>
        <form action="">
          <input className={styles.input} type="text" name="name" placeholder="Your name" />
          <input className={styles.input} type="text" name="email" placeholder="Your email" />
          <input className={styles.input} type="text" name="street" placeholder="Street address" />
          <input className={styles.input} type="text" name="postal" placeholder="Postal code" />
          <Button btnType="success">ORDER</Button>
        </form>
      </div>
    );
  }
}
