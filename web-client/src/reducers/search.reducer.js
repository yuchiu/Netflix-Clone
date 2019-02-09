import actionTypes from "@/actionTypes";

const initialState = {
  searchTerm: "",
  searchMatchTotal: 0,
  searchMovieResult: [],
  searchSuggestionList: [],
  resultFromIndex: 0,
  resultToIndex: 0,
  isLoading: false
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.SEARCH_MOVIE_FETCH:
      newState.isLoading = true;
      return newState;

    case actionTypes.SEARCH_MOVIE_FETCH_SUCCESS:
      newState.isLoading = false;
      newState.searchMovieResult = action.payload.searchMovieResult;
      newState.searchMatchTotal = parseInt(action.payload.total, 10);
      newState.resultToIndex = parseInt(action.payload.toIndex, 10);
      newState.resultFromIndex = parseInt(action.payload.fromIndex, 10);
      return newState;

    case actionTypes.SEARCH_MOVIE_FETCH_ERROR:
      newState.isLoading = false;
      return newState;

    case actionTypes.SEARCH_SUGGESTION_FETCH:
      newState.isLoading = true;
      return newState;

    case actionTypes.SEARCH_SUGGESTION_FETCH_SUCCESS:
      newState.isLoading = false;
      newState.searchSuggestionList = action.payload.suggestionList;
      return newState;

    case actionTypes.SEARCH_SUGGESTION_FETCH_ERROR:
      newState.isLoading = false;
      return newState;

    case actionTypes.SEARCH_MOVIE_RESULT_CLEAR:
      newState.searchMovieResult = [];
      newState.searchMatchTotal = 0;
      newState.resultToIndex = 0;
      return newState;

    case actionTypes.SEARCH_SUGGESTION_CLEAR:
      newState.searchSuggestionList = [];
      return newState;

    default:
      return state;
  }
};
