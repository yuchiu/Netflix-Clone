import actionTypes from "@/actionTypes";
import localStore from "@/utils/localStore";
import sessionStore from "@/utils/sessionStore";

const initialState = {
  isUserAuthenticated: false,
  currentUser: {},
  isLoading: false
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.USER_FETCH_TRY_AUTO_LOGIN:
      if (action.payload.verified) {
        newState.currentUser = action.payload.user;
        sessionStore.setUserLoggedIn();
        newState.isUserAuthenticated = sessionStore.getLoginStatus();
        return newState;
      }
      return state;

    case actionTypes.USER_FETCH_LOGIN:
      newState.isLoading = true;
      return newState;

    case actionTypes.USER_FETCH_LOGIN_SUCCESS:
      newState.isLoading = false;
      localStore.authenticateUser(action.payload);
      newState.currentUser = action.payload.user;
      sessionStore.setUserLoggedIn();
      newState.isUserAuthenticated = sessionStore.getLoginStatus();
      return newState;

    case actionTypes.USER_FETCH_LOGIN_ERROR:
      newState.isLoading = false;
      return newState;

    case actionTypes.USER_LOGOUT:
      localStore.deauthenticateUser();
      sessionStore.setUserLoggedOut();
      return initialState;

    default:
      return state;
  }
};
