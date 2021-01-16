import {
  INCREMENT_NUM,
  DECREMENT_NUM,
  RESET,
  RANGE,
  MODALINC,
  MODALDEC,
} from "../constants/ActionTypes";

const initialState = {
  count: 0,
  modalINC: 0,
  modalDec: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_NUM:
      return {
        ...state,
        count: +state.count + 1,
      };
    case DECREMENT_NUM:
      return {
        ...state,
        count: +state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
        modalINC: 0,
        modalDec: 0,
      };

    case RANGE:
      return {
        ...state,
        count: action.payload,
      };
    case MODALINC:
      return {
        ...state,
        modalDec: 0,
        modalINC: state.modalINC + 1,
      };
    case MODALDEC:
      return {
        ...state,
        modalINC: 0,
        modalDec: state.modalDec + 1,
      };
    default:
      return state;
  }

  return state;
}
