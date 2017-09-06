import {combineReducers} from 'redux';

import searchReducer from './searchReducer';
import upcomingReducer from './upcomingReducer';
import theMovieReducer from './theMovieReducer';


const rootReducer = combineReducers({
    search : searchReducer,
    upcoming : upcomingReducer,
    theMovie : theMovieReducer,
})



export default rootReducer;