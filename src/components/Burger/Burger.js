import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import styles from './Burger.module.css';

const burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients).map((name) =>
    [...Array(ingredients[name])].map((_, index) => {
      return <Ingredient key={name + index} type={name} />;
    })
  );

  return (
    <div className={styles.burger}>
      <Ingredient type="bread-top" />
      {transformedIngredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default burger;
