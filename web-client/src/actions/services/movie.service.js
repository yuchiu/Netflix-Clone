import { apiV1 } from "./API";

export default {
  fetchMovie: async movieId => {
    const response = await apiV1().get(`/movies/${movieId}`);
    return response;
  },
  fetcheMovieCollection: async collectionName => {
    const response = await apiV1().get(`/movies/collections/${collectionName}`);
    return response;
  }
};
