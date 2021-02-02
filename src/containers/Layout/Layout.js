import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import styles from './Layout.module.css';

export default class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandler = () => this.setState({ showSideDrawer: false });

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <>
        <Toolbar isToggle={this.sideDrawerToggleHandler} />
        <SideDrawer isOpen={this.state.showSideDrawer} isClosed={this.sideDrawerCloseHandler} />
        <main className={styles.content}>{this.props.children}</main>
      </>
    );
  }
}
