import actionTypes from "@/actionTypes";

const initialState = {
  searchMatchTotal: 0,
  searchMovieResult: [],
  currentMovieResultIndex: 0,
  isLoading: false
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    /* Fetch initiated */
    case actionTypes.SEARCH_MOVIE_FETCH:
      newState.isLoading = true;
      return newState;

    /* Fetch Errors */
    case actionTypes.SEARCH_MOVIE_FETCH_ERROR:
      newState.isLoading = false;
      return newState;

    /* Fetch Success */
    case actionTypes.SEARCH_MOVIE_FETCH_SUCCESS:
      newState.isLoading = false;
      newState.searchMovieResult = action.payload.searchMovieResult;
      newState.searchMatchTotal = action.payload.total;
      newState.currentMovieResultIndex = action.payload.toIndex;
      return newState;

    /* clear data */
    case actionTypes.SEARCH_MOVIE_RESULT_CLEAR:
      newState.searchMovieResult = [];
      newState.searchMatchTotal = 0;
      newState.currentMovieResultIndex = 0;
      return newState;

    default:
      return state;
  }
};
