import * as ActionTypes from "./ActionTypes";

export const Tacos = (state = { tacos: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TACOS:
      return { ...state, tacos: action.payload };
    default:
      return state;
  }
};
