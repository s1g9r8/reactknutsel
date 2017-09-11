
import firebase, { firebaseRef } from './../firebase';

// MODALS
export var showProjectModal = (status) => {
  return {
    type: 'SET_PROJECT_MODAL_STATUS',
    status,
  };
};

//------------------------------------------------------------------------------


// WEEKS
export var addWeek = () => {
  return {
    type: 'ADD_WEEK'
  };
};

export var getWeeks = () => {
  return {
    type: 'GET_WEEKS'
  };
};

export var updateWeek = (id, week) => {
  return {
    type: 'UPDATE_WEEK',
    id,
    week
  };
};
//------------------------------------------------------------------------------


// PROJECTS
// get projects from database
export var startAddProjects = () => {
  return (dispatch) => {
    return firebaseRef.child('projects').on('value', (snapshot) => {
      dispatch(addProjects(snapshot.val()));
    });
   };
};

// set all projects in the state
export var addProjects = (projects) => {
  return {
    type: 'ADD_PROJECTS',
    projects
  };
};

//update the concept status of a project in the state
export var updateProjectConceptStatus = (id, concept) => {
  return {
    type: 'UPDATE_PROJECT_CONCEPT_STATUS',
    id,
    concept
  };
};

// update the project in the state
export var updateProject = (id, project) => {
  return {
    type: 'UPDATE_PROJECT',
    id,
    project
  };
};

// save the project in database
export var startSaveProject = (id, project) => {
  project.concept = false;
  project.errorText = null;
  return (dispatch) => {
    if (id === 'undefined') {
      firebaseRef.child('projects').push(project);
    } else {
      firebaseRef.child(`projects/${id}`).update(project);
    }
  }
};

// remove project from database
export var startRemoveProject = (id) => {
  return (dispatch, getState) => {
    return firebaseRef.child(`projects/${id}`).remove();
  };
};

export var validateProject = (id, nameErrorText, customerErrorText, startDateErrorText) => {
  return {
    type: 'VALIDATE_PROJECT',
    nameErrorText,
    customerErrorText,
    startDateErrorText
  };
};

//------------------------------------------------------------------------------
