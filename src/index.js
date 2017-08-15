
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import App from './App';
import { weekListReducer } from './reducers/reducers.js';
import * as PlanboardAPI from './api/PlanboardAPI.js';

var initialState = PlanboardAPI.getWeeks();

var store = createStore(weekListReducer, initialState, compose(
  window.devToolsExtension? window.devToolsExtension() : f => f));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
