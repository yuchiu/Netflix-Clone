import {combineReducers} from 'redux';

import searchReducer from './searchReducer';
import upcomingReducer from './upcomingReducer';
import theMovieReducer from './theMovieReducer';
import castListReducer from './castListReducer';
import popularReducer from './popularReducer';
import topRatedReducer from './topRatedReducer';
import nowPlayingReducer from './nowPlayingReducer';
const rootReducer = combineReducers({
    search : searchReducer,
    upcoming : upcomingReducer,
    popular: popularReducer,
    topRated: topRatedReducer,
    nowPlaying: nowPlayingReducer,
    theMovie : theMovieReducer,
    castList : castListReducer,
})



export default rootReducer;