
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav.js';
import WeekList from './components/WeekList.js';
import Employees from './components/Employees.js';
import Projects from './components/Projects.js';


const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={WeekList}/>
        <Route path="/employees" component={Employees}/>
        <Route path="/projects" component={Projects}/>
      </div>
    </Router>
  );
};

export default App;
