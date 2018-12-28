import { combineReducers } from "redux";

import movieReducer from "./movie.reducer";
import userReducer from "./user.reducer";
import errorReducer from "./error.reducer";
import searchReducer from "./search.reducer";

const rootReducer = combineReducers({
  movieReducer,
  userReducer,
  errorReducer,
  searchReducer
});

export { movieReducer, userReducer, errorReducer, searchReducer };

export default rootReducer;
