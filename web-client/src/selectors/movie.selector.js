export default {
  getMovieIsLoading: state => state.movieReducer.isLoading,
  getSelectedMovie: state => state.movieReducer.selectedMovie,
  getTrendingCollectionList: state => state.movieReducer.trendingCollectionList,
  getPopularCollectionList: state => state.movieReducer.popularCollectionList,
  getTopRatingCollectionList: state =>
    state.movieReducer.topRatingCollectionList
};
