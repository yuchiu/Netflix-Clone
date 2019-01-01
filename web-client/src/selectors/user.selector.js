const getCurrentUser = state => state.userReducer.currentUser;
const getCurrentUsername = state => state.userReducer.currentUser.username;
const getIsUserAuthenticated = state => state.userReducer.isUserAuthenticated;
const getUserIsLoading = state => state.userReducer.isLoading;
const getHistories = state => state.userReducer.histories;
const getBookmarks = state => state.userReducer.bookmarks;

export default {
  getCurrentUser,
  getCurrentUsername,
  getIsUserAuthenticated,
  getBookmarks,
  getHistories,
  getUserIsLoading
};
