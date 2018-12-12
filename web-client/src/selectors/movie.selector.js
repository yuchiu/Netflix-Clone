/* state selectors */
export const getMovieIsLoading = state => state.movieReducer.isLoading;
export const getSelectedMovie = state => state.movieReducer.selectedMovie;
export const getMovieCollectionList = state =>
  state.movieReducer.movieCollectionList;
