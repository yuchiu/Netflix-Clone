export default {
  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  authenticateUser: data => {
    localStorage.setItem("token", data.token);
  },

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  isUserAuthenticated: () => localStorage.getItem("token") !== null,

  /**
   * Deauthenticate a user. Remove token and email from Local Storage.
   *
   */
  deauthenticateUser: () => {
    localStorage.removeItem("token");
  },
  /**
   * Get a token value.
   *
   * @returns {string}
   */
  getToken: () => localStorage.getItem("token")
};
