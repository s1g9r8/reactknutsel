
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, compose } from 'redux';

import App from './App';
//import store from './store/configureStore.js';
import weekListReducer from './reducers/weekListReducer.js';
import projectsReducer from './reducers/projectsReducer.js';
import modalReducer from './reducers/modalReducer.js';
import * as PlanboardAPI from './api/PlanboardAPI.js';


var initialWeeks = PlanboardAPI.getWeeks();
var initialProjects = PlanboardAPI.getProjects();

var initialState = {
  weeks: initialWeeks,
  projects: initialProjects,
  modal: undefined
}

var reducer = combineReducers({
  weeks: weekListReducer,
  projects: projectsReducer,
  modal: modalReducer
});

var store = createStore(reducer, initialState, compose(
  window.devToolsExtension? window.devToolsExtension() : f => f));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
