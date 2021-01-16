import reducer from "./counter";

import { INCREMENT_NUM, DECREMENT_NUM } from "../constants/ActionTypes";

describe("counter reducer", () => {
  it("should return the initial state", () => {
    expect(reducer({ count: 0, modalINC: 0, modalDec: 0 }, {})).toEqual({
      count: 0,
      modalINC: 0,
      modalDec: 0,
    });
  });

  it("increment => should return 1", () => {
    expect(
      reducer({ count: 0, modalINC: 0, modalDec: 0 }, { type: INCREMENT_NUM })
    ).toEqual({ count: 1, modalINC: 0, modalDec: 0 });
  });

  it("decrement => should return -1", () => {
    expect(
      reducer({ count: 0, modalINC: 0, modalDec: 0 }, { type: DECREMENT_NUM })
    ).toEqual({ count: -1, modalINC: 0, modalDec: 0 });
  });
});
