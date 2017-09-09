
var modalReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROJECT_MODAL_STATUS':
      return {status: action.status};
    default:
      return state;
  }
};

export default modalReducer;
