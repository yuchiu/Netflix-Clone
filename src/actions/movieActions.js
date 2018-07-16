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
  },
  fetchTheMovie: movieId => async dispatch => {
    const response = await API.fetchMovieData(`/movie/${movieId}?`);
    dispatch({
      type: constants.FETCH_THEMOVIE,
      payload: response
    });
  },
  fetchCast: movieId => async dispatch => {
    const response = await API.fetchMovieData(`/movie/${movieId}/credits?`);
    dispatch({
      type: constants.FETCH_CASTLIST,
      payload: response
    });
  },
  fetchSearch: searchText => async dispatch => {
    const response = await API.fetchMovieData(
      `/search/movie?`,
      `&query=${searchText}&page=1&include_adult=false`
    );
    dispatch({
      type: constants.FETCH_SEARCH,
      payload: response
    });
  }
};
