import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import styles from './Burger.module.css';

const burger = ({ ingredients }) => {
  let customIngredients = Object.keys(ingredients)
    .map((name) =>
      [...Array(ingredients[name])].map((_, index) => <Ingredient key={name + index} type={name} />)
    )
    .reduce((array, element) => [...array, ...element], []);

  if (customIngredients.length === 0) {
    customIngredients = <p>Beef me up please!</p>;
  }

  return (
    <div className={styles.burger}>
      <Ingredient type="bread-top" />
      {customIngredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default burger;
