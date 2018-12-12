export default {
  /* save logged in status */
  setUserLoggedIn: () => {
    sessionStorage.setItem("loginStatus", true);
  },
  /* remove log in status */
  setUserLoggedOut: () => {
    sessionStorage.removeItem("loginStatus", false);
  },
  /* Check if a user is loggedin */
  getLoginStatus: () => sessionStorage.getItem("loginStatus") === "true"
};
