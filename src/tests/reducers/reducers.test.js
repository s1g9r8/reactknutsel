import expect from 'expect';
import df from 'deep-freeze-strict';

import * as reducers from './../../reducers/reducers.js';

describe('Reducers', () => {

  describe('weekListReducer', () => {

    it('should add new week', () => {
      var action = {
        type: 'ADD_WEEK'
      };
      var res = reducers.weekListReducer(df([]), df(action));

      expect(res.length).toEqual(1);
    });


    it('should update hours for the weekdays', () => {
      var week = {
        id: '123',
        weekNumber: 3,
        year: 2017
      };
      var action = {
        type: 'UPDATE_WEEK',
        id: '123',
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5
      };
      res = reducers.weekListReducer(df(week), df(action));

      expect(res[0].monday).toEqual(1);
      expect(res[0].tuesday).toEqual(2);
      expect(res[0].wednesday).toEqual(3);
      expect(res[0].thursday).toEqual(4);
      expect(res[0].friday).toEqual(5);
    });
  });
});
