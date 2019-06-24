import React from 'react';
import PropTypes from 'prop-types';
import Publishers from './Publishers';
import { Modal, Button } from 'react-bootstrap';

class TopNavigation extends Publishers {
  constructor() {
    super();
    this.showModal = this.showModal.bind(this);
  }

  getComponent() {
    return <Publishers />;
  }

  showModal() {
    this.setState(() => {
      return {
        show: true,
      };
    });
  }
  render() {
    const {showGameForm} = this.props;
    return (
      <div className="ui secondary pointing menu">
        <a href="" className="item">
          BGShop
        </a>
        <a className="item" onClick={showGameForm}>
          <i className="icon plus" />
          Add New Game
        </a>
        <a className="item" onClick={this.showModal}>
          Manage Publishers
        </a>
        <div>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

TopNavigation.propTypes={
  showGameForm: PropTypes.func.isRequired,
}

export default TopNavigation;
