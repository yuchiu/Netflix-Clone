import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './containers/Layout';

import {Provider} from 'react-redux';
import {configureStore} from './store/store'



let initialState = {
  search: [],
  upcoming: [],
  topRated :[],
  nowPlaying: [],
  popular: [],
  theMovie: [],
  castList: [],
}

let store = configureStore(initialState)

const app = (
  <Provider store={store}>
        <Layout />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))