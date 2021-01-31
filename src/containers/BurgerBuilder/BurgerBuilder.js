import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasingMode: false,
  };

  updatePurchaseState = (ingredients) => {
    const purchasable = Object.values(ingredients).some((amount) => amount > 0);
    this.setState({ purchasable });
  };

  addIngredientHandler = (type) => {
    const currentCount = this.state.ingredients[type];
    const updatedCount = currentCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const currentPrice = this.state.totalPrice;
    const updatedPrice = currentPrice + priceAddition;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });

    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const currentCount = this.state.ingredients[type];
    if (currentCount <= 0) return;

    const updatedCount = currentCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const currentPrice = this.state.totalPrice;
    const updatedPrice = currentPrice - priceDeduction;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });

    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => this.setState({ purchasingMode: true });
  purchaseCancelHandler = () => this.setState({ purchasingMode: false });
  purchaseContinueHandler = () => alert('Order checkout page coming soon!');

  render() {
    return (
      <>
        <Modal isDisplay={this.state.purchasingMode} isClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            cancelCheckout={this.purchaseCancelHandler}
            proceedCheckout={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          submitOrder={this.purchaseHandler}
          addControl={this.addIngredientHandler}
          removeControl={this.removeIngredientHandler}
        />
      </>
    );
  }
}
