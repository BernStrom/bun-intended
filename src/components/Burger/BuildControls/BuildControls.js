import React from 'react';
import ControlOptions from './ControlOptions/ControlOptions';
import styles from './BuildControls.module.css';

const itemOptions = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = ({ addControl }) => {
  return (
    <div className={styles.buildControls}>
      {itemOptions.map((item) => (
        <ControlOptions key={item.label} label={item.label} addItem={() => addControl(item.type)} />
      ))}
    </div>
  );
};

export default buildControls;
