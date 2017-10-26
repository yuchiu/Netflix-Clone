import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/containers/Layout';

import {Provider} from 'react-redux';
import {configureStore} from './store/store'


const app = (
  <Provider store={configureStore()}>
    <Layout/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))