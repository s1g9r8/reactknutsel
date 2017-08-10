import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {createStore, compose} from 'redux';

import {weekListReducer} from './reducers/reducers.js';
import WeekList from './components/WeekList.js'

var store = createStore(weekListReducer, {}, compose(
  window.devToolsExtension? window.devToolsExtension() : f => f));

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Lekker uren schrijven</h2>
        </div>
        <Provider store={store}>
          <WeekList/>
        </Provider>
      </div>
    );
  }
}

export default App;
