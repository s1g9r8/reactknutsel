
import expect from 'expect';
import * as actions from './../../actions/actions.js';

describe ('Actions', () => {

  it('should generate an add week action', () => {
    var action = {
      type: 'ADD_WEEK'
    };
    var res = actions.addWeek();
    expect(res).toEqual(action);
  });

  it ('should generate an update week action', () => {
    var action = {
      type: 'UPDATE_WEEK',
      id: 1,
      week: '{monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5}'
    };
    var res = actions.updateWeek(action.id, action.week);
    expect(res).toEqual(action);
  })
});
