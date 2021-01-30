import React from 'react';
import ControlOptions from './ControlOptions/ControlOptions';
import styles from './BuildControls.module.css';

const itemOptions = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = ({ ingredients, price, addControl, removeControl }) => {
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
    </div>
  );
};

export default buildControls;
