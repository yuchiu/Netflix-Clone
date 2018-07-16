import { combineReducers } from "redux";

import searchReducer from "./searchReducer";
import theMovieReducer from "./theMovieReducer";
import castListReducer from "./castListReducer";
import hompageListsReducer from "./hompageListsReducer";

const rootReducer = combineReducers({
  hompageListsReducer,
  searchReducer,
  theMovieReducer,
  castListReducer
});

export default rootReducer;
