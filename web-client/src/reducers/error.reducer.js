import actionTypes from "@/actionTypes";

const initialState = {
  error: ""
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case actionTypes.USER_FETCH_LOGIN_ERROR:
      newState.error = action.payload;
      return newState;

    case actionTypes.MOVIE_COLLECTION_FETCH_ERROR:
      newState.error = action.payload;
      return newState;

    case actionTypes.MOVIE_FETCH_ERROR:
      newState.error = action.payload;
      return newState;

    case actionTypes.USER_LOGOUT:
      return initialState;

    default:
      return state;
  }
};
