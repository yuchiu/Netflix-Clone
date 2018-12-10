import { combineReducers } from "redux";

import searchReducer from "./search.reducer";
import theMovieReducer from "./theMovie.reducer";
import castListReducer from "./castList.reducer";
import hompageListsReducer from "./hompageLists.reducer";
import errorReducer from "./error.reducer";

const rootReducer = combineReducers({
  hompageListsReducer,
  searchReducer,
  theMovieReducer,
  castListReducer,
  errorReducer
});

export default rootReducer;
