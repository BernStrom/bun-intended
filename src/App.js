import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

export default class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/" exact>
              <BurgerBuilder />
            </Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}
