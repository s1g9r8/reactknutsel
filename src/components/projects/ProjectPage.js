
import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import ProjectList from './ProjectList.js';
import ProjectModal from './ProjectModal.js';
import * as Actions from './../../actions/actions.js';
import * as Vutils from './../common/ValidationUtils.js';
import * as Constants from './../common/Constants.js';

const Projects = ({ state, actions }) => {

  var projects = state.projects? state.projects : {};
  var projectKey = _.findKey(projects, {'concept': true} );
  var project = projectKey? projects[projectKey] : {concept: true};
  project.errorText = project.errorText? project.errorText : {};

  var closeModal = () => {
    actions.startAddProjects();
    actions.showProjectModal(false);
  }

  var addProject = () => {
    actions.showProjectModal(true);
  }

  var editProject = (id) => {
    actions.updateProjectConceptStatus(id, true);
    actions.showProjectModal(true);
  }

  var saveProject = () => {
    validateFields();
    if (Vutils.allValid(project.errorText) ) {
      actions.startSaveProject(projectKey, project);
      actions.showProjectModal(false);
    }
  }

  var removeProject = (id) => {
    actions.startRemoveProject(id);
  }

  var validateFields = () => {
    let et = Constants.projectModalErrorText;

    let condName = project.name && project.name.length < 25;
    project.errorText = Vutils.validateField(project.errorText, 'name', et.name, condName, false, project.name);

    let condCustomer = project.customer && project.customer.length < 25;
    project.errorText = Vutils.validateField(project.errorText, 'customer', et.customer, condCustomer, false, project.customer);

    let condStartDate = project.startDate && project.endDate? project.startDate < project.endDate : true;
    project.errorText = Vutils.validateField(project.errorText, 'startDate', et.startDate, condStartDate, false, project.startDate);

    actions.updateProject(projectKey, project);
  }

  var changeInputField = (name, value) => {
    switch (name) {
      case 'projectName':
        project.name = value;
        break;
      case 'customer':
        project.customer = value;
        break;
      case 'startDate':
        project.startDate = value;
        break;
      case 'endDate':
        project.endDate = value;
        break;
      default:
        ''
    }
    actions.updateProject(projectKey, project);
  }

  return (
    <div className="project-page">
       <h1>Projects</h1>
       <button onClick={addProject}>add project</button>
       <ProjectList projects={projects} removeProject={removeProject} editProject={editProject}/>
       <Modal isOpen={state.modal.status} className='modal'>
          <h1>Project</h1>
          <ProjectModal id={projectKey} project={project} changeInputField={changeInputField}/>
          <div className='button-group'>
            <button className='modal-close' onClick={closeModal}>Cancel</button>
            <button className='modal-save' onClick={saveProject}>Save</button>
          </div>
       </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
