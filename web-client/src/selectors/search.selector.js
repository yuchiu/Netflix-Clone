export default {
  getSearchIsLoading: state => state.searchReducer.isLoading,
  getSearchMatchTotal: state => state.searchReducer.searchMatchTotal,
  getSearchMovieResult: state => state.searchReducer.searchMovieResult,
  getCurrentMovieResultIndex: state =>
    state.searchReducer.currentMovieResultIndex
};
