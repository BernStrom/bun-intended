import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import styles from './Layout.module.css';

export default class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerCloseHandler = () => this.setState({ showSideDrawer: false });

  render() {
    return (
      <>
        <Toolbar />
        <SideDrawer isOpen={this.state.showSideDrawer} isClosed={this.sideDrawerCloseHandler} />
        <main className={styles.content}>{this.props.children}</main>
      </>
    );
  }
}
