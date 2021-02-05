import React, { Component } from 'react';
import axios from '../../../axios-db-instance';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './ContactData.module.css';

export default class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Bern',
        address: {
          street: '4 Hampton Road',
          zipCode: '97370',
          country: 'Canada',
        },
        email: 'test@email.com',
      },
      deliveryMethod: 'fastest',
    };

    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => this.setState({ loading: false }));
  };

  render() {
    let form = (
      <form action="">
        <input className={styles.input} type="text" name="name" placeholder="Your name" />
        <input className={styles.input} type="text" name="email" placeholder="Your email" />
        <input className={styles.input} type="text" name="street" placeholder="Street address" />
        <input className={styles.input} type="text" name="postal" placeholder="Postal code" />
        <Button btnType="success" checkoutOption={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) form = <Spinner />;

    return (
      <div className={styles.contactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}
