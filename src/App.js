import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import uuid from 'uuid';

import {weeksReducer} from './reducers/reducers.js';
import WeekList from './components/WeekList.js'


var store = createStore(weeksReducer, {});

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
