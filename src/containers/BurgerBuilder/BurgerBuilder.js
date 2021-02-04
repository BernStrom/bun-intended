import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import errorHandler from '../../errorHandler';
import axios from '../../axios-db-instance';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasingMode: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get('https://bun-intended-default-rtdb.firebaseio.com/ingredients.json')
      .then((response) => this.setState({ ingredients: response.data }))
      .catch((error) => this.setState({ error: true }));
  }

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
  purchaseContinueHandler = () => {
    // this.setState({ loading: true });

    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: 'Bern',
    //     address: {
    //       street: '4 Hampton Road',
    //       zipCode: '97370',
    //       country: 'Canada',
    //     },
    //     email: 'test@email.com',
    //   },
    //   deliveryMethod: 'fastest',
    // };

    // axios
    //   .post('/orders.json', order)
    //   .then((response) => this.setState({ loading: false, purchasingMode: false }))
    //   .catch((error) => this.setState({ loading: false, purchasingMode: false }));
    
    this.props.history.push({
      pathname: '/checkout',
      search: new URLSearchParams(this.state.ingredients).toString()
    });
  };

  render() {
    let orderSummary = null;
    let burger = this.state.error ? <p>The burger builder can't be loaded!</p> : <Spinner />;

    if (this.state.ingredients) {
      burger = (
        <>
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

      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          cancelCheckout={this.purchaseCancelHandler}
          proceedCheckout={this.purchaseContinueHandler}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <>
        <Modal isDisplay={this.state.purchasingMode} isClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

export default errorHandler(BurgerBuilder, axios);
