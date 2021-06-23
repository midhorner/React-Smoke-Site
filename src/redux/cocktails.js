import * as ActionTypes from "./ActionTypes";

export const Cocktails = (state = { errMess: null, cocktails: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COCKTAILS:
      return { ...state, errMess: null, cocktails: action.payload };
    case ActionTypes.COCKTAILS_FAILED:
      return { ...state, errMess: action.payload };
    default:
      return state;
  }
};
