/* eslint-disable */
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './app/reducers/index';

import {Main} from './app/main';

import './index.scss';

  const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('root')
);
