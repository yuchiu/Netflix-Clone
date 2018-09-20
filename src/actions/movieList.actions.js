import constants from "../constants";
import { tmdbAPI } from "./services";

export default {
  fetchUpcoming: () => async dispatch => {
    try {
      const response = await tmdbAPI("/movie/upcoming?");
      const { data } = response;
      dispatch({
        type: constants.FETCH_UPCOMING,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_TMDBAPI_ERROR,
        payload: "error occured while fetching to tmdb API"
      });
    }
  },
  fetchPopular: () => async dispatch => {
    try {
      const response = await tmdbAPI("/movie/popular?");
      const { data } = response;
      dispatch({
        type: constants.FETCH_POPULAR,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_TMDBAPI_ERROR,
        payload: "error occured while fetching to tmdb API"
      });
    }
  },
  fetchTopRated: () => async dispatch => {
    try {
      const response = await tmdbAPI("/movie/top_rated?");
      const { data } = response;
      dispatch({
        type: constants.FETCH_TOPRATED,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_TMDBAPI_ERROR,
        payload: "error occured while fetching to tmdb API"
      });
    }
  },
  fetchNowPlaying: () => async dispatch => {
    try {
      const response = await tmdbAPI("/movie/now_playing?");
      const { data } = response;
      dispatch({
        type: constants.FETCH_NOWPLAYING,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_TMDBAPI_ERROR,
        payload: "error occured while fetching to tmdb API"
      });
    }
  }
};
