import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "@/reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =
  process.env.NODE_ENV === "production"
    ? createStore(rootReducer, applyMiddleware(thunk))
    : createStore(rootReducer, composeEnhancer(applyMiddleware(thunk, logger)));

export default store;
