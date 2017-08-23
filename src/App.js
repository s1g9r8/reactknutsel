
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import ModalConstructor from './components/common/ModalConstructor.js';
import Nav from './components/common/Nav.js';
import WeekList from './components/planning/WeekList.js';
import Employees from './components/employees/Employees.js';
import Projects from './components/projects/Projects.js';
import './App.css';

const App = () => {
  return (
    <div>
      <ModalConstructor />
      <Router>
        <div className="app">
          <Nav />
            <div className="content container">
              <Route exact path="/" component={WeekList}/>
              <Route path="/employees" component={Employees}/>
              <Route path="/projects" component={Projects}/>
            </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
