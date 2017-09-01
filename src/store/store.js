import {applyMiddleware , compose,  createStore} from 'redux';
import rootReducer from '../reducers/'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'


//add middleware
let finalCreateStore = compose(
    applyMiddleware(thunk, createLogger())
)(createStore)


//if initial state did not passed in to configureStore, then it will assign to empty todos array
const configureStore = function (initialState = {search:[]}){
    return finalCreateStore(rootReducer, initialState) 
}


export default configureStore;