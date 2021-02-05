import React from 'react';
import styles from './Order.module.css';

const order = ({ price, ingredients }) => {
  const ingredients = [];

  for (let ingredientName in ingredients) {
    ingredients.push({ name: ingredientName, amount: ingredients[ingredientName] });
  }

  const ingredientOutput = ingredients.map((ig) => (
    <span
      key={ig.name}
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        padding: '5px',
        border: '1px solid #ccc',
      }}
    >
      {ig.name} ({ig.amount})
    </span>
  ));

  return (
    <div className={styles.order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>${price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
