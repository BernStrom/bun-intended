import React from 'react';
import PropTypes from 'prop-types';
import styles from './Ingredient.module.css';

const ingredient = ({ type }) => {
    let ingredientItem = null;

    switch (type) {
        case 'bread-bottom':
            ingredientItem = <div className={styles.breadBottom}></div>;
            break;
        case 'bread-top':
            ingredientItem = (
                <div className={styles.breadTop}>
                    <div className={styles.seeds1}></div>
                    <div className={styles.seeds2}></div>
                </div>
            );
            break;
        case 'meat':
            ingredientItem = <div className={styles.meat}></div>;
            break;
        case 'cheese':
            ingredientItem = <div className={styles.cheese}></div>;
            break;
        case 'bacon':
            ingredientItem = <div className={styles.bacon}></div>;
            break;
        case 'salad':
            ingredientItem = <div className={styles.salad}></div>;
            break;
        default:
            ingredientItem = null;
    }

    return ingredientItem;
}

ingredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default ingredient;
