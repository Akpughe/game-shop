import React, { Component } from 'react';
import Modal from './Modal';

export default class Publishers extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    console.log('got hereee');
    this.setState({ show: true });
    this.render();
  }

  render() {
    return <Modal />;
  }
}

// React.Component.render(<Publishers />);
