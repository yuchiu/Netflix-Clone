/* state selectors */
export const getCurrentUser = state => state.userReducer.currentUser;
export const getCurrentUsername = state =>
  state.userReducer.currentUser.username;
export const getIsUserAuthenticated = state =>
  state.userReducer.isUserAuthenticated;
export const getUserIsLoading = state => state.userReducer.isLoading;

export default {
  getCurrentUser,
  getCurrentUsername,
  getIsUserAuthenticated,
  getUserIsLoading
};
