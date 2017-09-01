import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import configureStore from './store/store';
import {Provider} from 'react-redux';

let initialState = {
    search: [
    {
        movies : [],
        theMovie:[]
    }
  ]
}

let store = configureStore(initialState)

const app = (
  <Provider store={store}>
    <Layout/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))