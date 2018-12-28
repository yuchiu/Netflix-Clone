export default {
  getCurrentUser: state => state.userReducer.currentUser,
  getCurrentUsername: state => state.userReducer.currentUser.username,
  getIsUserAuthenticated: state => state.userReducer.isUserAuthenticated,
  getUserIsLoading: state => state.userReducer.isLoading
};
