
var modalReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MODAL':
      return {currentModal: action.currentModal, modalProps: action.modalProps};
    default:
      return state;
  }
};

export default modalReducer;
