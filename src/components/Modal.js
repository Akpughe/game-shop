import React from 'react';
import PropTypes from 'prop-types';
import { Modal as CustomModal, Button } from 'react-bootstrap';

const Modal = ({
  children,
  btnText,
  title,
  show,
  handleClose,
  handleSubmit,
}) => {
  //   const handleClose = () => {
  //     this.setState({ show: false });
  //   };

  //   const handleShow = () => {
  //     console.log('got hereee');
  //     this.setState({ show: true });
  //     this.render();
  //   };

  return (
    <CustomModal show={show}>
      <CustomModal.Header closeButton>
        <CustomModal.Title>{title}</CustomModal.Title>
      </CustomModal.Header>
      <CustomModal.Body>{children}</CustomModal.Body>
      <CustomModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {btnText}
        </Button>
      </CustomModal.Footer>
    </CustomModal>
  );
};

Modal.defaultProps = {
  btnText: 'Save Changes',
  title: '',
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  btnText: PropTypes.string,
  title: PropTypes.string,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Modal;
