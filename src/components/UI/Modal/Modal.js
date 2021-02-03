import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

export default class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.isDisplay !== this.props.isDisplay || nextProps.children !== this.props.children;
  }

  componentDidUpdate() {
    console.log('[Modal] WillUpdate');
  }

  render() {
    return (
      <>
        <Backdrop open={this.props.isDisplay} close={this.props.isClosed} />
        <div
          className={styles.modal}
          style={{
            transform: this.props.isDisplay ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.isDisplay ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}
