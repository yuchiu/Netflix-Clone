/* state selectors */
export const getCurrentUser = state => state.userReducer.currentUser;
export const getCurrentUsername = state =>
  state.userReducer.currentUser.username;
export const getIsUserLoggedIn = state => state.userReducer.isUserLoggedIn;
export const getUserIsLoading = state => state.userReducer.isLoading;

export default {
  getCurrentUser,
  getCurrentUsername,
  getIsUserLoggedIn,
  getUserIsLoading
};
