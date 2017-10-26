import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from '../services/reducers/'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';

//add middleware
let finalCreateStore = compose(
  composeWithDevTools(
    applyMiddleware(
      thunk, 
      createLogger()
    )
  )
)(createStore)

const configureStore = function (initialState = {
  upcoming: [],
  topRated: [],
  nowPlaying: [],
  popular: [],
  search: [],
  theMovie: {},
  castList: []
}) {
  return finalCreateStore(rootReducer, initialState)
}

export {history, configureStore};