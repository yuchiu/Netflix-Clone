import actionTypes from "@/actionTypes";
import { movieService } from "./services";

export default {
  fetchMovie: movieId => async dispatch => {
    dispatch({
      type: actionTypes.MOVIE_FETCH
    });
    try {
      const response = await movieService.fetchMovie(movieId);
      const { data } = response.data;
      dispatch({
        type: actionTypes.MOVIE_FETCH_SUCCESS,
        payload: data
      });
    } catch (err) {
      const { data } = err.response;
      dispatch({
        type: actionTypes.MOVIE_FETCH_ERROR,
        payload: data.meta.message
      });
    }
  },

  fetchMovieCollection: collectionName => async dispatch => {
    dispatch({
      type: actionTypes.MOVIE_COLLECTION_FETCH
    });
    try {
      const response = await movieService.fetchMovieCollection(collectionName);
      const { data } = response.data;
      dispatch({
        type: actionTypes.MOVIE_COLLECTION_FETCH_SUCCESS,
        payload: data
      });
    } catch (err) {
      const { data } = err.response;
      dispatch({
        type: actionTypes.MOVIE_COLLECTION_FETCH_ERROR,
        payload: data.meta.message
      });
    }
  },

  clearSelectedMovie: () => dispatch => {
    dispatch({
      type: actionTypes.MOVIE_CLEAR_SELECTED
    });
  }
};
