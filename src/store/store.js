import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from '../reducers/'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';

//add middleware
let finalCreateStore = compose(composeWithDevTools(applyMiddleware(thunk, createLogger())))(createStore)

// if initial state did not passed in to configureStore, then it will assign to
// empty todos array
const configureStore = function (initialState = {
  search: [],
  popular: [],
  upcoming: [],
  theMovie: [],
  castList: [],
}) {
  return finalCreateStore(rootReducer, initialState)
}

export {history, configureStore};