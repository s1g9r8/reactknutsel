
import uuid from 'uuid';

var projectsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        {
          id: uuid(),
          name: action.name,
          startDate: action.startDate,
          endDate: action.endDate
        }
      ];
    case 'REMOVE_PROJECT':
      return state.filter((project) => project.id !== action.id);
    default:
      return state;
  }
};

export default projectsReducer;
