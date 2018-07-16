import constants from "../constants";

const initialState = {
  searchResult: []
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case constants.FETCH_SEARCH:
      newState.searchResult = action.payload.data.results;
      return newState;
    default:
      return state;
  }
};
