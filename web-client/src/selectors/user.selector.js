/* state selectors */
const getCurrentUser = state => state.userReducer.currentUser;
const getCurrentUsername = state => state.userReducer.currentUser.username;
const getIsUserLoggedIn = state => state.userReducer.isUserLoggedIn;
const getUserIsLoading = state => state.userReducer.isLoading;

export {
  getCurrentUser,
  getCurrentUsername,
  getIsUserLoggedIn,
  getUserIsLoading
};
