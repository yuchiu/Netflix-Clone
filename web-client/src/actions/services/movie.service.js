import { apiV1 } from "./API";

export default {
  fetchMovie: async movieId => {
    const response = await apiV1().get(`/movies/${movieId}`);
    return response;
  },
  fetchMovieCollection: async collectionName => {
    const response = await apiV1().get(`/movies/collections/${collectionName}`);
    return response;
  }
};
