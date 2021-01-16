import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Collapse from "react-bootstrap/Collapse";
// import Collapse from "react-bootstrap/lib/Collapse";
import { Button, Collapse } from "react-bootstrap";

import IncrementComponent from "./IncrementComponent";
import DecrementComponent from "./DecrementComponent";
import ResetComponent from "./ResetComponent";
import Modal from "../UI/Modal";

class Controls extends Component {
  constructor(props) {
    super(props);
    this.autoIncrementHandler = this.autoIncrementHandler.bind(this);
    this.autoDecrementHandler = this.autoDecrementHandler.bind(this);
    this.stopHandler = this.stopHandler.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      inc: "",
      dec: "",
      open: false,
      modalINCShow: false,
      modalDECShow: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.modalINC !== this.props.modalINC ||
      prevProps.modalDEC !== this.props.modalDEC
    ) {
      if (this.props.modalINC >= 3 && this.props.modalINC % 2 !== 0) {
        this.setState({ modalINCShow: true });
      }
      if (this.props.modalDEC >= 3 && this.props.modalDEC % 2 !== 0) {
        this.setState({ modalDECShow: true });
      }
    }
  }

  autoIncrementHandler() {
    clearInterval(this.state.dec);
    let inc = setInterval(() => {
      this.props.increment();
    }, 2000);
    this.setState({ inc: inc });
  }

  autoDecrementHandler() {
    clearInterval(this.state.inc);
    let dec = setInterval(() => {
      this.props.decrement();
    }, 2000);
    this.setState({ dec: dec });
  }

  stopHandler() {
    clearInterval(this.state.inc);
    clearInterval(this.state.dec);
  }

  handleClose() {
    this.setState({ modalINCShow: false, modalDECShow: false });
  }

  render() {
    const {
      incrementLabel,
      decrementLabel,
      resetLabel,
      increment,
      decrement,
      reset,
      autoIncrement,
      autoDecrement,
      stop,
      onModalINC,
      onModalDEC,
      modalINC,
      modalDEC,
    } = this.props;

    return (
      <Fragment>
        {this.state.modalINCShow ? (
          <Modal
            show={this.state.modalINCShow}
            count={modalINC}
            handleClose={this.handleClose}
            str='+'
          />
        ) : this.state.modalDECShow ? (
          <Modal
            show={this.state.modalDECShow}
            count={modalDEC}
            handleClose={this.handleClose}
            str='-'
          />
        ) : null}
        <Button
          onClick={() => this.setState({ open: !this.state.open })}
          className='btn btn-primary'
          role='button'
          aria-expanded='false'
        >
          Controls
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <div className='controls'>
              <IncrementComponent
                incrementLabel={incrementLabel}
                increment={increment}
                onModalINC={onModalINC}
              />
              <DecrementComponent
                decrementLabel={decrementLabel}
                decrement={decrement}
                onModalDEC={onModalDEC}
              />
              <ResetComponent resetLabel={resetLabel} reset={reset} />
            </div>
            <div className='controls'>
              <div onClick={this.autoIncrementHandler}>
                <span>{autoIncrement}</span>
              </div>
              <div onClick={this.autoDecrementHandler}>
                <span>{autoDecrement}</span>
              </div>
              <div onClick={this.stopHandler}>
                <span>{stop}</span>
              </div>
            </div>
          </div>
        </Collapse>
      </Fragment>
    );
  }
}

Controls.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  reset: PropTypes.func,
  onModalINC: PropTypes.func,
  onModalDEC: PropTypes.func,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string,
  autoIncrement: PropTypes.string,
  autoDecrement: PropTypes.string,
  stop: PropTypes.string,
  modalINC: PropTypes.number,
  modalDEC: PropTypes.number,
};

Controls.defaultProps = {
  incrementLabel: "+",
  decrementLabel: "-",
  resetLabel: "Reset",
  autoIncrement: "auto increment",
  autoDecrement: "auto decrement",
  stop: "Stop",
};

export default Controls;
