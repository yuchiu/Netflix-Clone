import {combineReducers} from 'redux';

import searchReducer from './searchReducer';
import upcomingReducer from './upcomingReducer';
import theMovieReducer from './theMovieReducer';
import castListReducer from './castListReducer';


const rootReducer = combineReducers({
    search : searchReducer,
    upcoming : upcomingReducer,
    theMovie : theMovieReducer,
    castList : castListReducer,
})



export default rootReducer;