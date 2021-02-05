import React from 'react';
import styles from './Input.module.css';

const input = (props) => {
  let inputElement = null;
  let validationError = null;
  const inputClasses = [styles.inputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(styles.invalid);
  }

  if (props.invalid && props.touched) {
    validationError = (
      <p className={styles.validationError}>Please enter a valid {props.valueType}!</p>
    );
  }

  switch (props.inputtype) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select className={inputClasses.join(' ')} value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={styles.input}>
      <label className={styles.label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;
