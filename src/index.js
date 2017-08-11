
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import App from './App';
import { weekListReducer } from './reducers/reducers.js';


var store = createStore(weekListReducer, {}, compose(
  window.devToolsExtension? window.devToolsExtension() : f => f));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
