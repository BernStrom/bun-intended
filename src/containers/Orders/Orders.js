import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-db-instance';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import errorHandler from '../../errorHandler';
import * as actions from '../../store/actions/index';

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let orders = <Spinner />;

    if (!this.props.loading) {
      orders = this.props.orders.map((order) => (
        <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
      ));
    }

    return (
      <div>
        {orders}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Orders, axios));
