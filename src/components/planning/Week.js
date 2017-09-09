
import React from 'react';
import moment from 'moment';

import Day from './Day.js';

const Week = (props) => {

  var { week } = props;

  var createDate = (day, weekNumber, year) => {
    return (moment().day(day).week(weekNumber).year(year).format('DD-MM'));
  };

  return (
    <div>
      <table>
        <caption>Week {week.weekNumber}</caption>
        <thead>
          <th></th>
          <th>Monday {createDate("Monday", week.weekNumber, week.year)}</th>
          <th>Tuesday {createDate("Tuesday", week.weekNumber, week.year)}</th>
          <th>Wednesday {createDate("Wednesday", week.weekNumber, week.year)}</th>
          <th>Thursday {createDate("Thursday", week.weekNumber, week.year)}</th>
          <th>Friday {createDate("Friday", week.weekNumber, week.year)}</th>
        </thead>
        <tbody>
        <tr>
          <th></th>
          <td><Day key={week.monday.id} {...week.monday}/></td>
          <td><Day key={week.tuesday.id} {...week.tuesday}/></td>
          <td><Day key={week.wednesday.id} {...week.wednesday}/></td>
          <td><Day key={week.thursday.id} {...week.thursday}/></td>
          <td><Day key={week.friday.id} {...week.friday}/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Week;
