import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

const ModalField = (props) => {
  const { count, handleClose, show, str } = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>MODAL</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You Pressed on {str} {count} Times
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

Modal.propTypes = {
  count: PropTypes.number,
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  str: PropTypes.string,
};

export default ModalField;
