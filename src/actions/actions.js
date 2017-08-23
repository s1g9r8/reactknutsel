// MODALS
export var showModalAddProject = (modal) => {
  return {
    type: 'SET_MODAL',
    modal
  };
};


// WEEKS
export var addWeek = () => {
  return {
    type: 'ADD_WEEK'
  };
};

export var updateWeek = (id, week) => {
  return {
    type: 'UPDATE_WEEK',
    id,
    week
  };
};


// PROJECTS
export var addProject = (name, customer, startDate, endDate) => {
  return {
    type: 'ADD_PROJECT',
    name,
    customer,
    startDate,
    endDate
  };
};

export var updateProject = (id, project) => {
  return {
    type: 'UPDATE_PROJECT',
    id,
    project
  };
};

export var removeProject = (id) => {
  return {
    type: 'REMOVE_PROJECT',
    id
  };
};
