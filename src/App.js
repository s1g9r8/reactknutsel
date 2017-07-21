import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Week from './components/Week.js';

class App extends Component {

  render() {

    const weekdays = [{
      fieldLabel: "Monday",
      fieldRef: "monday"
    }, {
      fieldLabel: "Tuesday",
      fieldRef: "tuesday"
    }, {
      fieldLabel: "Wednesday",
      fieldRef: "wednesday"
    }, {
      fieldLabel: "Thursday",
      fieldRef: "thursday"
    }, {
      fieldLabel: "Friday",
      fieldRef: "friday"
    }]

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the best planning tool ever!</h2>
        </div>
        <Week weekdays={weekdays}/>
      </div>
    );
  }
}

export default App;
