
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { combineReducers, createStore, compose } from 'redux';
import * as redux from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import weeksReducer from './reducers/weeksReducer.js';
import projectsReducer from './reducers/projectsReducer.js';
import modalReducer from './reducers/modalReducer.js';
import * as PlanboardAPI from './api/PlanboardAPI.js';
import * as Actions from './actions/actions.js';
//import store from './store/configureStore.js';

var initialWeeks = PlanboardAPI.getWeeks();
var initialProjects = PlanboardAPI.getProjects();

var initialState = {
  weeks: initialWeeks,
  projects: {},
  modal: undefined
}

var reducer = redux.combineReducers({
  weeks: weeksReducer,
  projects: projectsReducer,
  modal: modalReducer
});

var store = redux.createStore(reducer, initialState, redux.compose(
  redux.applyMiddleware(thunk),
  window.devToolsExtension? window.devToolsExtension() : f => f));

store.dispatch(Actions.startAddProjects());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
