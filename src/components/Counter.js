import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.inc = 10;
    this.dec = 10;
    this.keyPressed = {};
  }

  handleChange(e) {
    this.props.onRange(e.target.value);
  }

  handleKeyDown(e) {
    this.keyPressed[e.key] = true;
    if (
      this.keyPressed["Control"] &&
      this.keyPressed["+"] &&
      e.key === "ArrowRight"
    ) {
      this.props.onIncrement();
    }
    if (
      this.keyPressed["Control"] &&
      this.keyPressed["+"] &&
      e.key === "ArrowLeft"
    ) {
      this.props.onDecrement();
    }
  }

  handleKeyUp() {
    this.keyPressed = {};
  }

  render() {
    const { count } = this.props;

    return (
      <div
        className='counter'
        onKeyUp={this.handleKeyUp}
        onKeyDown={this.handleKeyDown}
        tabIndex='0'
      >
        <div
          style={{
            backgroundColor:
              count > 0
                ? `rgb(${this.inc + +count}, 0, 0)`
                : count < 0
                ? `rgb(0, ${this.dec - +count}, 0)`
                : `rgb(255,255,255)`,
          }}
        >
          {count}
        </div>
        <input
          id='range'
          type='range'
          name='rangeInput'
          min='0'
          max='100'
          value={count}
          onChange={this.handleChange}
        />
        <Controls />
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  onRange: PropTypes.fun,
};

export default Counter;
