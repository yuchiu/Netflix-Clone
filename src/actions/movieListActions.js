import constants from "../constants";
import { API } from "../utils";

export default {
  fetchUpcoming: () => async dispatch => {
    const response = await API.fetchMovieData("/movie/upcoming?");
    dispatch({
      type: constants.FETCH_UPCOMING,
      payload: response
    });
  },
  fetchPopular: () => async dispatch => {
    const response = await API.fetchMovieData("/movie/popular?");
    dispatch({
      type: constants.FETCH_POPULAR,
      payload: response
    });
  },
  fetchTopRated: () => async dispatch => {
    const response = await API.fetchMovieData("/movie/top_rated?");
    dispatch({
      type: constants.FETCH_TOPRATED,
      payload: response
    });
  },
  fetchNowPlaying: () => async dispatch => {
    const response = await API.fetchMovieData("/movie/now_playing?");
    dispatch({
      type: constants.FETCH_NOWPLAYING,
      payload: response
    });
  }
};
