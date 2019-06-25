import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publishers from './Publishers';
import Modal from './Modal';

class TopNavigation extends Component {
  state = {
    show: false,
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    // console.log('got hereee');
    this.setState({ show: true });
    // this.render();
  }

  handleSubmit() {
    // call api to submit
    console.log('Submit Modal Content');
    this.setState({ show: false });
  }

  // getComponent() {
  //   return <Publishers />;
  // }

  // showModal() {
  //   this.setState(() => {
  //     return {
  //       show: true,
  //     };
  //   });
  // }
  render() {
    const { showGameForm } = this.props;
    return (
      <div className="ui secondary pointing menu">
        <a href="" className="item">
          BGShop
        </a>
        <a className="item" onClick={showGameForm}>
          <i className="icon plus" />
          Add New Game
        </a>
        <a className="item" onClick={this.handleShow.bind(this)}>
          Manage Publishers
        </a>
        <div>
          <Modal
            show={this.state.show}
            handleClose={this.handleClose.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
            title="Davis is here"
            btnText="Submit"
          >
            Woohoo, you're reading this text in a modal!
          </Modal>
        </div>
      </div>
    );
  }
}

TopNavigation.propTypes = {
  showGameForm: PropTypes.func.isRequired,
};

export default TopNavigation;
