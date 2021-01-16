import React from "react";
import PropTypes from "prop-types";

const DecrementComponent = ({ decrementLabel, decrement, onModalDEC }) => {
  return (
    <div
      onClick={() => {
        decrement();
        onModalDEC();
      }}
    >
      <span>{decrementLabel}</span>
    </div>
  );
};

DecrementComponent.propTypes = {
  decrement: PropTypes.func,
  onModalDEC: PropTypes.func,
  decrementLabel: PropTypes.string,
};

export default DecrementComponent;
