import * as ActionTypes from "./ActionTypes";

export const Cocktails = (state = { cocktails: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COCKTAILS:
      return { ...state, cocktails: action.payload };
    default:
      return state;
  }
};
