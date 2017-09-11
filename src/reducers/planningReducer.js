import uuid from 'uuid';
import moment from 'moment';

var planningReducer = (state = [], action) => {

  var weekNumber = (state.length ? (state[state.length - 1].weekNumber + 1) : moment().week())

  //TODO: make year as a variable and check if the weeknumber is not larger than largest number in year

  switch (action.type) {
    // case 'ADD_WEEK':
    //   return [
    //     ...state,
    //     {
    //       id: uuid(),
    //       weekNumber: weekNumber,
    //       year: 2017,
    //       projects: 'projects'
    //     }
    //   ];
      case 'GET_WEEKS':
        return {
          'i1' : {weekNumber: 36,
                  year: 2017,
                  projects: { 'p1': { 'e1': {name: 'suzanne', hours: 36}, 'e2': {name: 'olger', hours: 40} },
                              'p2': { 'e3': {name: 'her', hours: 40}, 'e4': {name: 'danny', hours: 36} }
                            }
          },
          'i2' : {weekNumber: 37,
                  year: 2017,
                  projects: { 'p1': { 'e1': {name: 'suzanne', hours: 36}, 'e2': {name: 'olger', hours: 40} },
                              'p2': { 'e3': {name: 'her', hours: 40}, 'e4': {name: 'danny', hours: 36} }
                            }
          }
      }
      case 'ADD_PROJECT':
          return {...state, concept: true};
    default:
      return state;
  }
};

export default planningReducer;
