import constants from "../constants";
import { tmdbAPI } from "./services";

export default {
  fetchTheMovie: movieId => async dispatch => {
    try {
      const response = await tmdbAPI(`/movie/${movieId}?`);
      const { data } = response;
      dispatch({
        type: constants.FETCH_THEMOVIE,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_TMDBAPI_ERROR,
        payload: "error occured while fetching to tmdb API"
      });
    }
  },
  fetchCast: movieId => async dispatch => {
    try {
      const response = await tmdbAPI(`/movie/${movieId}/credits?`);
      const { data } = response;
      dispatch({
        type: constants.FETCH_CASTLIST,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_TMDBAPI_ERROR,
        payload: "error occured while fetching to tmdb API"
      });
    }
  },
  fetchSearch: searchText => async dispatch => {
    try {
      const response = await tmdbAPI(
        `/search/movie?`,
        `&query=${searchText}&page=1&include_adult=false`
      );
      const { data } = response;
      dispatch({
        type: constants.FETCH_SEARCH,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_TMDBAPI_ERROR,
        payload: "error occured while fetching to tmdb API"
      });
    }
  },

  clearTheMovie: () => dispatch => {
    dispatch({
      type: constants.CLEAR_THE_MOVIE
    });
  },
  clearSearchResult: () => dispatch => {
    dispatch({
      type: constants.CLEAR_SEARCH_RESULT
    });
  }
};
