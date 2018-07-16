import constants from "../constants";
import { API } from "../utils";

export default {
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
