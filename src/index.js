
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as redux from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import planningReducer from './reducers/planningReducer.js';
import projectsReducer from './reducers/projectsReducer.js';
import modalReducer from './reducers/modalReducer.js';
import * as Actions from './actions/actions.js';

var reducer = redux.combineReducers({
  planning: planningReducer,
  projects: projectsReducer,
  modal: modalReducer
});

var store = redux.createStore(reducer, {}, redux.compose(
  redux.applyMiddleware(thunk),
  window.devToolsExtension? window.devToolsExtension() : f => f));

store.dispatch(Actions.startAddProjects());
store.dispatch(Actions.getWeeks());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
