import React from 'react';
import ControlOptions from './ControlOptions/ControlOptions';
import styles from './BuildControls.module.css';

const itemOptions = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = ({ ingredients, price, purchasable, addControl, removeControl }) => {
  return (
    <div className={styles.buildControls}>
      <p>
        Current Price: <strong>{price.toFixed(2)}</strong>
      </p>
      {itemOptions.map((item) => (
        <ControlOptions
          key={item.label}
          label={item.label}
          addItem={() => addControl(item.type)}
          removeItem={() => removeControl(item.type)}
          isDisabled={!ingredients[item.type]}
        />
      ))}
      <button className={styles.orderButton} disabled={!purchasable}>
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
