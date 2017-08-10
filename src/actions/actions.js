
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
