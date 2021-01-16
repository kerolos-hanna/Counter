import React, { Component } from "react";
import Controls from "../components/Controls";
import { connect } from "react-redux";

import {
  incrementNum,
  decrementNum,
  reset,
  range,
  modalINC,
  modalDEC,
} from "../actions/counterActions";

export class Controller extends Component {
  render() {
    return <Controls {...this.props} />;
  }
}

export const mapStateToProps = (state) => {
  return {
    modalINC: state.count.modalINC,
    modalDEC: state.count.modalDec,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(incrementNum());
    },
    decrement: () => {
      dispatch(decrementNum());
    },
    reset: () => dispatch(reset()),
    onRange: (payload) => dispatch(range(payload)),
    onModalINC: () => dispatch(modalINC()),
    onModalDEC: () => dispatch(modalDEC()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
