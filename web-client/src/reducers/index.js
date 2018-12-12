import { combineReducers } from "redux";

import movieReducer from "./movie.reducer";
import userReducer from "./user.reducer";
import errorReducer from "./error.reducer";

const rootReducer = combineReducers({
  movieReducer,
  userReducer,
  errorReducer
});

export default rootReducer;
