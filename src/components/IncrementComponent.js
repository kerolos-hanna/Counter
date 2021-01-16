import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const IncrementComponent = ({
  incrementLabel,
  increment,
  onModalINC,
  modalINC,
}) => {
  useEffect(() => {
    console.log("IncrementComponent -> modalINC", modalINC);
  }, [modalINC]);
  return (
    <div
      onClick={() => {
        increment();
        onModalINC();
      }}
    >
      <span>{incrementLabel}</span>
    </div>
  );
};

IncrementComponent.propTypes = {
  increment: PropTypes.func,
  onModalINC: PropTypes.func,
  incrementLabel: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    modalINC: state.count.modalINC,
  };
};

export default connect(mapStateToProps)(IncrementComponent);
