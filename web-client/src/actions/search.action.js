import actionTypes from "@/actionTypes";
import { searchService } from "./services";

export default {
  fetchSearchSuggestion: searchTerm => async dispatch => {
    dispatch({
      type: actionTypes.SEARCH_SUGGESTION_FETCH
    });
    try {
      const response = await searchService.fetchSearchSuggestion(searchTerm);
      const { data } = response.data;
      dispatch({
        type: actionTypes.SEARCH_SUGGESTION_FETCH_SUCCESS,
        payload: data
      });
    } catch (err) {
      const { data } = err.response;
      dispatch({
        type: actionTypes.SEARCH_SUGGESTION_FETCH_ERROR,
        payload: data.meta.message
      });
    }
  },

  fetchSearchMovie: queryFilters => async dispatch => {
    dispatch({
      type: actionTypes.SEARCH_MOVIE_FETCH
    });
    try {
      const response = await searchService.fetchSearchMovie(queryFilters);
      const { data } = response.data;
      dispatch({
        type: actionTypes.SEARCH_MOVIE_FETCH_SUCCESS,
        payload: data
      });
    } catch (err) {
      const { data } = err.response;
      dispatch({
        type: actionTypes.SEARCH_MOVIE_FETCH_ERROR,
        payload: data.meta.message
      });
    }
  },

  clearMovieSearchResult: () => dispatch => {
    dispatch({
      type: actionTypes.SEARCH_MOVIE_RESULT_CLEAR
    });
  },

  clearSearchSuggestion: () => dispatch => {
    dispatch({
      type: actionTypes.SEARCH_SUGGESTION_CLEAR
    });
  }
};
