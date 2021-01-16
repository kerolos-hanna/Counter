import {
  INCREMENT_NUM,
  DECREMENT_NUM,
  RESET,
  RANGE,
  MODALINC,
  MODALDEC,
} from "../constants/ActionTypes";

export function incrementNum(payload) {
  return {
    type: INCREMENT_NUM,
    payload: payload,
  };
}

export function decrementNum(payload) {
  return {
    type: DECREMENT_NUM,
    payload: payload,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

// add input range fun
export function range(payload) {
  return {
    type: RANGE,
    payload: payload,
  };
}

export function modalINC() {
  return {
    type: MODALINC,
  };
}

export function modalDEC() {
  return {
    type: MODALDEC,
  };
}
