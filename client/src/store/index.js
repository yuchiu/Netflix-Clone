import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

// add middleware
const finalCreateStore = compose(
  composeWithDevTools(applyMiddleware(thunk, createLogger()))
)(createStore);

const configureStore = function(
  initialState = {
    upcoming: [],
    topRated: [],
    nowPlaying: [],
    popular: [],
    search: [],
    theMovie: {},
    castList: []
  }
) {
  return finalCreateStore(rootReducer, initialState);
};

export default configureStore;
