import actionTypes from "@/actionTypes";

const initialState = {
  selectedMovie: {},
  trendingCollectionList: [],
  popularCollectionList: [],
  topRatingCollectionList: [],
  isLoading: false
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    /* Fetch initiated */
    case actionTypes.MOVIE_FETCH || actionTypes.MOVIE_COLLECTION_FETCH:
      newState.isLoading = true;
      return newState;

    /* Fetch Errors */
    case actionTypes.MOVIE_FETCH_ERROR ||
      actionTypes.MOVIE_COLLECTION_FETCH_ERROR:
      newState.isLoading = false;
      return newState;

    /* Fetch Success */
    case actionTypes.MOVIE_FETCH_SUCCESS:
      newState.isLoading = false;
      if (action.payload.movie.length > 0)
        newState.selectedMovie = action.payload.movie[0];
      return newState;

    case actionTypes.MOVIE_COLLECTION_FETCH_SUCCESS:
      newState.isLoading = false;
      switch (action.payload.collectionName) {
        case "trending":
          newState.trendingCollectionList = action.payload.movieCollection;
          break;
        case "popular":
          newState.popularCollectionList = action.payload.movieCollection;
          break;
        case "rating":
          newState.topRatingCollectionList = action.payload.movieCollection;
          break;
        default:
          break;
      }
      return newState;

    /* clear data */
    case actionTypes.MOVIE_CLEAR_SELECTED:
      newState.selectedMovie = {};
      return newState;

    default:
      return state;
  }
};
