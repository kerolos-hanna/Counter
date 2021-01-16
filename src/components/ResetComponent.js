import React from "react";
import PropTypes from "prop-types";

const ResetComponent = ({ resetLabel, reset }) => {
  return (
    <div
      onClick={() => {
        reset();
      }}
    >
      <span>{resetLabel}</span>
    </div>
  );
};

ResetComponent.propTypes = {
  reset: PropTypes.func,
  resetLabel: PropTypes.string,
};

export default ResetComponent;
