import React, { Component } from "react";
import Controls from "../components/Counter";
import { connect } from "react-redux";

import { range, incrementNum, decrementNum } from "../actions/counterActions";

export class Controller extends Component {
  render() {
    return <Controls {...this.props} />;
  }
}

export const mapStateToProps = (store) => {
  return {
    count: store.count.count,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onRange: (payload) => dispatch(range(payload)),
    onIncrement: () => dispatch(incrementNum()),
    onDecrement: () => dispatch(decrementNum()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
