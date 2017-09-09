
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';


import Nav from './components/common/Nav.js';
//import WeekList from './components/planning/WeekList.js';
import Planning from './components/planning/Planning.js';
import Employees from './components/employees/Employees.js';
import ProjectPage from './components/projects/ProjectPage.js';
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <div className="app">
          <Nav />
            <div className="content container">
              <Route exact path="/" component={Planning}/>
              <Route path="/employees" component={Employees}/>
              <Route path="/projects" component={ProjectPage}/>
            </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
