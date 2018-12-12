import actionTypes from "../actionTypes";

const initialState = {
  selectedMovie: {},
  movieCollectionList: {
    trending: [],
    popular: [],
    rating: []
  },
  isLoading: false
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    /* Fetch initiated */
    case actionTypes.MOVIE_FETCH:
      newState.isLoading = true;
      return newState;

    case actionTypes.MOVIE_COLLECTION_FETCH:
      newState.isLoading = true;
      return newState;

    /* Fetch Success */
    case actionTypes.MOVIE_FETCH_SUCCESS:
      newState.isLoading = false;
      newState.selectedMovie = action.payload;
      return newState;

    case actionTypes.MOVIE_COLLECTION_FETCH_SUCCESS:
      newState.isLoading = false;
      newState.movieCollectionList[action.payload.collectionName] =
        action.payload.movieCollection;
      return newState;

    /* Fetch Errors */
    case actionTypes.MOVIE_FETCH_ERROR:
      newState.isLoading = false;
      return newState;

    case actionTypes.MOVIE_COLLECTION_FETCH_ERROR:
      newState.isLoading = false;
      return newState;

    default:
      return state;
  }
};
