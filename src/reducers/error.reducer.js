import constants from "../constants";

const initialState = {
  error: ""
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case constants.FETCH_TMDBAPI_ERROR:
      newState.error = action.payload;
      console.log(action.payload);
      return newState;
    default:
      return state;
  }
};
