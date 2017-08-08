
export var addWeek = () => {
  return {
    type: 'ADD_WEEK'
  };
};

export var addWeekHours = (id, monday, tuesday) => {
  return {
    type: 'ADD_WEEK_HOURS',
    id,
    monday,
    tuesday
  };
};

export var addProject = (project) => {
  return {
    type: 'ADD_PROJECT',
    project
  };
};
