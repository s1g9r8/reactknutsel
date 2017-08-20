
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectList from './ProjectList.js';
import AddProject from './AddProject.js';
import * as Actions from './../../actions/actions.js';


const Projects = ({state, actions}) => {

  var newProject = {};

  var addProject = () => {
    actions.addProject(newProject.name, newProject.customer, newProject.startDate, newProject.endDate);
  }

  var removeProject = (id) => {
    actions.removeProject(id);
  }

  var changeAddProjectField = (name, value) => {
    switch (name) {
      case 'projectName':
        newProject.name = value;
        break;
      case 'customer':
        newProject.customer = value;
        break;
      case 'startDate':
        newProject.startDate = value;
        break;
      case 'endDate':
        newProject.endDate = value;
        break;
      default:
        ''
        break;
    }
}

  return (
    <div className="project-page">
       <h1>Projects</h1>
       <ProjectList projects={state.projects} removeProject={removeProject}/>
       <AddProject {...newProject} addProject={addProject} changeAddProjectField={changeAddProjectField} />
    </div>
  );
}

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
