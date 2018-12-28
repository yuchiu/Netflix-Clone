import { apiV1 } from "./API";

export default {
  fetchSearchMovie: async queryFilters => {
    const response = await apiV1().get(
      `/movies/filters/?search_term=${queryFilters.searchTerm}`
    );
    return response;
  }
};
