import { createSelector } from "reselect";

import userSelector from "./user.selector";

const getMovieIsLoading = state => state.movieReducer.isLoading;
const getSelectedMovie = state => state.movieReducer.selectedMovie;
const getTrendingCollectionList = state =>
  state.movieReducer.trendingCollectionList;
const getPopularCollectionList = state =>
  state.movieReducer.popularCollectionList;
const getTopRatingCollectionList = state =>
  state.movieReducer.topRatingCollectionList;

const getSelectedMovieBookmarkId = createSelector(
  getSelectedMovie,
  userSelector.getBookmarks,
  (selectedMovie, userBookmarks) => {
    let selectedMovieBookmarkId = "";
    userBookmarks.forEach(bookmark => {
      if (bookmark.movieId === selectedMovie.id) {
        selectedMovieBookmarkId = bookmark.id;
      }
    });
    return selectedMovieBookmarkId;
  }
);
export default {
  getMovieIsLoading,
  getSelectedMovie,
  getTrendingCollectionList,
  getPopularCollectionList,
  getTopRatingCollectionList,
  getSelectedMovieBookmarkId
};
