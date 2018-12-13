/* state selectors */
export const getMovieIsLoading = state => state.movieReducer.isLoading;
export const getSelectedMovie = state => state.movieReducer.selectedMovie;
export const getTrendingCollectionList = state =>
  state.movieReducer.trendingCollectionList;
export const getPopularCollectionList = state =>
  state.movieReducer.popularCollectionList;
export const getRatingCollectionList = state =>
  state.movieReducer.ratingCollectionList;
