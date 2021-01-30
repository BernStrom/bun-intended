import React from 'react';

const orderSummary = ({ ingredients }) => {
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
    </>
  );
};

export default orderSummary;
