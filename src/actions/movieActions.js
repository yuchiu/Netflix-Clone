import constants from "../constants";
import { API } from "../utils";

export default {
  fetchTheMovie: movieId => async dispatch => {
    const response = await API.fetchMovieData(`/movie/${movieId}?`);
    console.log("fetchTheMovie");
    console.log(response);
    dispatch({
      type: constants.FETCH_THEMOVIE,
      payload: response
    });
  },
  fetchCast: movieId => async dispatch => {
    const response = await API.fetchMovieData(`/movie/${movieId}/credits?`);
    console.log("fetchCast");
    console.log(response);
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
