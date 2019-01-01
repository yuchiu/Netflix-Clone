import { apiV1 } from "./API";

export default {
  fetchTryAutoSignIn: async () => {
    const response = await apiV1().get(`/users/auth`);
    return response;
  },
  fetchSignUpUser: async credentials => {
    const response = await apiV1().post(`/users/signup`, credentials);
    return response;
  },

  fetchSignInUser: async credentials => {
    const response = await apiV1().post(`/users/signin`, credentials);
    return response;
  },

  createMovieHistory: async movieData => {
    const response = await apiV1().post(`/users/histories`, movieData);
    return response;
  },

  createMovieBookmark: async movieData => {
    const response = await apiV1().post(`/users/bookmarks`, movieData);
    return response;
  },

  removeMovieBookmark: async bookmarkId => {
    const response = await apiV1().delete(`/users/bookmarks/${bookmarkId}`);
    return response;
  }
};
