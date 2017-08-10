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
      return state.map((week) => {
        if (week.id === action.id) {
          return {
            ...week,
            monday: action.week.monday,
            tuesday: action.week.tuesday,
            wednesday: action.week.wednesday,
            thursday: action.week.thursday,
            friday: action.week.friday
          };
        } else {
          return week;
        }
      });
    default:
      return state;
  }
};
