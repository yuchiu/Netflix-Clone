import { combineReducers } from "redux";

import searchReducer from "./searchReducer";
import theMovieReducer from "./theMovieReducer";
import castListReducer from "./castListReducer";
import hompageListsReducers from "./hompageListsReducers";

const rootReducer = combineReducers({
  hompageListsReducers,
  searchReducer,
  theMovieReducer,
  castListReducer
});

export default rootReducer;
