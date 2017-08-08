import uuid from 'uuid';
import moment from 'moment';

export var weekListReducer = (state = [], action) => {

  var weekNumber = (state.length ? (state[state.length - 1].weekNumber + 1) : moment().week())

  //TODO: make year as a variable and check if the weeknumber is not larger than largest number in year

  switch (action.type) {
    case 'ADD_WEEK':
      return [
        ...state,
        {
          id: uuid(),
          weekNumber: weekNumber,
          year: 2017
        }
      ];
    case 'UPDATE_WEEK':
    // TODO: werkt nog niet, nakijken nog
      return () => {
        let i = state.findIndex(obj => obj.id === action.id);
        if (i !== undefined) {
          state[i].monday = action.monday,
            state[i].tuesday = action.tuesday
        }
        return state
      }
    default:
      return state;
  }
};


export var projectReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        {

        }
      ];
    default:
      return state;
  }
};
