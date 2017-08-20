
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

export var addProject = (name, customer, startDate, endDate) => {
  return {
    type: 'ADD_PROJECT',
    name,
    startDate,
    endDate
  };
};

export var removeProject = (id) => {
  return {
    type: 'REMOVE_PROJECT',
    id
  };
};
