
export var addWeek = () => {
  return {
    type: 'ADD_WEEK'
  };
};

export var addProject = (project) => {
  return {
    type: 'ADD_PROJECT',
    project
  };
};
