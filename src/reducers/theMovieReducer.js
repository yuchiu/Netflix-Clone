import constants from "../constants";

const initialState = {
  theMovie: {}
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case constants.FETCH_THEMOVIE:
      newState.theMovie = action.payload.data;
      return newState;
    default:
      return state;
  }
};
