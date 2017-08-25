import uuid from 'uuid';

var projectsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        {
          id: uuid(),
          name: action.name,
          customer: action.customer,
          startDate: action.startDate,
          endDate: action.endDate
        }
      ];
    case 'UPDATE_PROJECT':
      return state.map((project) => {
        if (project.id === action.id) {
          return {
            ...project,
            name: action.name,
            customer: action.customer,
            startDate: action.startDate,
            endDate: action.endDate
          };
        } else {
          return project;
        }
      });
    case 'REMOVE_PROJECT':
      return state.filter((project) => project.id !== action.id);
    default:
      return state;
  }
};

export default projectsReducer;
