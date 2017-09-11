
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Nav from './components/common/Nav.js';
import PlanningPage from './components/planning/PlanningPage.js';
import EmployeesPage from './components/employees/EmployeesPage.js';
import ProjectPage from './components/projects/ProjectPage.js';
//import './App.css';
import './stylesheets/styles.css';

const App = () => {
  return (
    <div>
      <Router>
        <div className="app">
          <Nav />
            <div className="content container">
              <Route exact path="/" component={PlanningPage}/>
              <Route path="/employees" component={EmployeesPage}/>
              <Route path="/projects" component={ProjectPage}/>
            </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
