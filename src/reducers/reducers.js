import uuid from 'uuid';
import moment from 'moment';

export var weeksReducer = (state = [], action) => {

  var weekNumber = (state.length? (state[state.length - 1].weekNumber + 1) : moment().week())

  //TODO: year variabel maken en checken of het weeknummer niet groter is dan het laatste weeknummer in jaar

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
          id: uuid(),
          monday: 1,
          tuesday: 2,
          wednesday: 3,
          thursday: 4,
          friday: 5
        }
      ];
    default:
      return state;
  }
};
