import constants from "../constants";

const theMovieReducer = function(theMovie = {}, action) {
  switch (action.type) {
    case constants.FETCH_THEMOVIE:
      return (theMovie = action.payload.data);

    case constants.FETCH_ERROR:
      return console.log(action.payload);

    default:
      return theMovie;
  }
};
export default theMovieReducer;
