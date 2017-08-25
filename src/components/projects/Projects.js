
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectList from './ProjectList.js';
import * as Actions from './../../actions/actions.js';
import * as PlanboardAPI from './../../api/PlanboardAPI.js';


const Projects = ({state, actions}) => {

  var projects = state.projects;

  var showProjectModal = (modalProps) => {
    actions.showModal('PROJECT', modalProps);
  }

  var addProject = () => {
    let projectId = {id: ''};
    showProjectModal(projectId);
  }

  var editProject = (id) => {
    let project = projects.filter((project) => project.id === id);
    let projectProps = {id: id, name: project[0].name, customer: project[0].customer, startDate: project[0].startDate, endDate: project[0].endDate};
    showProjectModal(projectProps);
  }

  var removeProject = (id) => {
    actions.removeProject(id);
  }

  return (
    <div className="project-page">
       <h1>Projects</h1>
       <button onClick={addProject}>add project</button>
       <ProjectList projects={projects} removeProject={removeProject} editProject={editProject}/>
    </div>
  );
}

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
