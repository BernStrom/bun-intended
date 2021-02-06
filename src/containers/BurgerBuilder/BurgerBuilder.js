import React, { Component } from 'react';
import { connect } from 'react-redux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import errorHandler from '../../errorHandler';
import axios from '../../axios-db-instance';
import * as burgerBuilderActions from '../../store/actions/index';
class BurgerBuilder extends Component {
  state = {
    purchasingMode: false,
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  updatePurchaseState = (ingredients) => {
    const purchasable = Object.values(ingredients).some((amount) => amount > 0);
    return purchasable;
  };

  purchaseHandler = () => this.setState({ purchasingMode: true });
  purchaseCancelHandler = () => this.setState({ purchasingMode: false });
  purchaseContinueHandler = () => this.props.history.push('/checkout');

  render() {
    let orderSummary = null;
    let burger = this.props.error ? <p>The burger builder can't be loaded!</p> : <Spinner />;

    if (this.props.ings) {
      burger = (
        <>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.ings)}
            submitOrder={this.purchaseHandler}
            addControl={this.addIngredientHandler}
            removeControl={this.removeIngredientHandler}
          />
        </>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          price={this.props.price}
          cancelCheckout={this.purchaseCancelHandler}
          proceedCheckout={this.purchaseContinueHandler}
        />
      );
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

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(BurgerBuilder, axios));
