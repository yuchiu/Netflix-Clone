import { createSelector } from "reselect";

const getSearchIsLoading = state => state.searchReducer.isLoading;
const getSearchMatchTotal = state => state.searchReducer.searchMatchTotal;
const getSearchMovieResult = state => state.searchReducer.searchMovieResult;
const getResultToIndex = state => state.searchReducer.resultToIndex;
const getResultFromIndex = state => state.searchReducer.resultFromIndex;
const getSearchSuggestionList = state =>
  state.searchReducer.searchSuggestionList;

// calculate total pages by rounding up result of the formula:
// total movies/movies per page = total pages
// ex: 6672/20 = 333.6, round up 333.6 = 334 pages
const getTotalMovieResultPages = createSelector(
  getSearchMatchTotal,
  searchMatchTotal => {
    let totalMovieResultPage = 1;
    if (searchMatchTotal <= 20) {
      return totalMovieResultPage;
    }
    totalMovieResultPage = Math.ceil(searchMatchTotal / 20);
    return totalMovieResultPage;
  }
);

// calculate current page by rounding up result of the formula:
// (current movies index + 1)/movies per page = current page
// ex: (18 + 1)/20 = 0.95, round up 0.95 = page 1
const getCurrentMovieResultPage = createSelector(
  getResultToIndex,
  resultToIndex => Math.ceil((resultToIndex + 1) / 20)
);

export default {
  getSearchIsLoading,
  getSearchMatchTotal,
  getSearchMovieResult,
  getResultToIndex,
  getResultFromIndex,
  getTotalMovieResultPages,
  getCurrentMovieResultPage,
  getSearchSuggestionList
};
