import * as ActionTypes from "./ActionTypes";

export const Tacos = (state = { errMess: null, tacos: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TACOS:
      return { ...state, errMess: null, tacos: action.payload };
    case ActionTypes.TACOS_FAILED:
      return { ...state, errMess: null, tacos: action.payload };
    default:
      return state;
  }
};
