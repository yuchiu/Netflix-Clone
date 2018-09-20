import constants from "../constants";

const initialState = {
  theMovie: {}
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case constants.FETCH_THEMOVIE:
      newState.theMovie = action.payload;
      return newState;

    case constants.CLEAR_THE_MOVIE:
      newState.theMovie = {};
      return newState;

    default:
      return state;
  }
};
