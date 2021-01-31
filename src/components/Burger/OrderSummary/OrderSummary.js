import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = ({ ingredients, cancelCheckout, proceedCheckout }) => {
  const ingredientsSummary = Object.keys(ingredients).map((name) => (
    <li key={name}>
      <span style={{ textTransform: 'capitalize' }}>{name}</span>: {ingredients[name]}
    </li>
  ));

  return (
    <>
      <h3>Your Order</h3>
      <p>
        <em>With these oh-so-satisfying ingredients:</em>
      </p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to checkout?</p>
      <Button btnType="danger" checkoutOption={cancelCheckout}>
        CANCEL
      </Button>
      <Button btnType="success" checkoutOption={proceedCheckout}>
        CONTINUE
      </Button>
    </>
  );
};

export default orderSummary;
