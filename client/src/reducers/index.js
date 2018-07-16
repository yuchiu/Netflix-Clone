import { combineReducers } from "redux";

import searchReducer from "./searchReducer";
import theMovieReducer from "./theMovieReducer";
import castListReducer from "./castListReducer";
import hompageListsReducers from "./hompageListsReducers";

const rootReducer = combineReducers({
  upcoming: hompageListsReducers.upcomingReducer,
  popular: hompageListsReducers.popularReducer,
  topRated: hompageListsReducers.topRatedReducer,
  nowPlaying: hompageListsReducers.nowPlayingReducer,
  search: searchReducer,
  theMovie: theMovieReducer,
  castList: castListReducer
});

export default rootReducer;
