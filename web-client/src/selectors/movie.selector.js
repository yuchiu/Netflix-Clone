const getMovieIsLoading = state => state.movieReducer.isLoading;
const getSelectedMovie = state => state.movieReducer.selectedMovie;
const getTrendingCollectionList = state =>
  state.movieReducer.trendingCollectionList;
const getPopularCollectionList = state =>
  state.movieReducer.popularCollectionList;
const getTopRatingCollectionList = state =>
  state.movieReducer.topRatingCollectionList;

export default {
  getMovieIsLoading,
  getSelectedMovie,
  getTrendingCollectionList,
  getPopularCollectionList,
  getTopRatingCollectionList
};
