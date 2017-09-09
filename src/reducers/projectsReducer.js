
var projectsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PROJECTS':
      return action.projects
    case 'ADD_PROJECT':
      return {...state, concept: true};
    case 'UPDATE_PROJECT_CONCEPT_STATUS': {
      var p = state[action.id];
      p.concept = action.concept;
      return {...state, [action.id]: p};
    }
    case 'UPDATE_PROJECT':
      return {...state, [action.id]: action.project}
    case 'VALIDATE_PROJECT':
      return state.map((project) => {
        if (project.id === action.id) {
          return {
            ...project,
            nameErrorText: action.nameErrorText,
            customerErrorText: action.customerErrorText,
            startDateErrorText: action.startDateErrorText
          };
        } else {
          return project;
        }
      });
    default:
      return state;
  }
};

export default projectsReducer;
