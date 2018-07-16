import constants from "../constants";

const initialState = {
  castList: []
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case constants.FETCH_CASTLIST:
      newState.castList = action.payload.data.cast;
      return newState;
    default:
      return state;
  }
};
