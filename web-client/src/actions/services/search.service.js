import { apiV1 } from "./API";

export default {
  fetchSearchMovie: async queryFilters => {
    const response = await apiV1().get(
      `/movies/filters/?search_term=${queryFilters.searchTerm}&from_index=${
        queryFilters.nextPageFromIndex
      }`
    );
    return response;
  },
  fetchSearchSuggestion: async searchTerm => {
    const response = await apiV1().get(`/movies/suggestions/${searchTerm}`);
    return response;
  }
};
