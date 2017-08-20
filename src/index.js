
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, compose } from 'redux';

import App from './App';
import weekListReducer from './reducers/weekListReducer.js';
import projectsReducer from './reducers/projectsReducer.js';
import * as PlanboardAPI from './api/PlanboardAPI.js';


var initialState = PlanboardAPI.getWeeks();

var reducer = combineReducers({
  weeks: weekListReducer,
  projects: projectsReducer
});

var store = createStore(reducer, initialState, compose(
  window.devToolsExtension? window.devToolsExtension() : f => f));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
