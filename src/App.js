import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Day from './components/Day.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the best planning tool ever!</h2>
        </div>
        <Day/>
      </div>
    );
  }
}

export default App;
