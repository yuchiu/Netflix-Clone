import searchReducer from './searchReducer';
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
    search : searchReducer
})


export default rootReducer;