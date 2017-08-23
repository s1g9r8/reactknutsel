
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectList from './ProjectList.js';
import AddProject from './AddProject.js';
import * as Actions from './../../actions/actions.js';
import * as PlanboardAPI from './../../api/PlanboardAPI.js';


const Projects = ({state, actions}) => {

  var projects = state.projects;
  var targetProject = {};

  var handlePopup = () => {
    actions.showModalAddProject('PROJECT');
  }

  var addProject = () => {
    actions.addProject(targetProject.name, targetProject.customer, targetProject.startDate, targetProject.endDate);
    //alert("project " + JSON.stringify(projects, newProject));
    //PlanboardAPI.setProjects([{projects},{newProject}]);
  }

  var removeProject = (id) => {
    actions.removeProject(id);
  }

  var editProject = (id) => {
    targetProject = projects.filter((project) => project.id === id);
    //alert(JSON.stringify(targetProject));
  }

  var changeAddProjectField = (name, value) => {
    switch (name) {
      case 'projectName':
        targetProject.name = value;
        break;
      case 'customer':
        targetProject.customer = value;
        break;
      case 'startDate':
        targetProject.startDate = value;
        break;
      case 'endDate':
        targetProject.endDate = value;
        break;
      default:
        ''
        break;
    }
  }

  return (
    <div className="project-page">
       <h1>Projects</h1>
       <button onClick={handlePopup}>add project</button>
       <ProjectList projects={projects} removeProject={removeProject} editProject={editProject}/>
    </div>
  );
}

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);


//<AddProject {...targetProject} addProject={addProject} changeAddProjectField={changeAddProjectField} />
