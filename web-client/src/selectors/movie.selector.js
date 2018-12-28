export default {
  getMovieIsLoading: state => state.movieReducer.isLoading,
  getSelectedMovie: state => state.movieReducer.selectedMovie,
  getSearchMovieResult: state => state.movieReducer.searchMovieResult,
  getTrendingCollectionList: state => state.movieReducer.trendingCollectionList,
  getPopularCollectionList: state => state.movieReducer.popularCollectionList,
  getTopRatingCollectionList: state =>
    state.movieReducer.topRatingCollectionList
};
