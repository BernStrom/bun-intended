import React from 'react';
import ControlOptions from './ControlOptions/ControlOptions';
import styles from './BuildControls.module.css';

const itemOptions = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => {
  return (
    <div className={styles.buildControls}>
      {itemOptions.map((item) => (
        <ControlOptions key={item.label} label={item.label} />
      ))}
    </div>
  );
};

export default buildControls;
