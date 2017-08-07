import React from 'react';
import moment from 'moment';

const Week = ({id, weekNumber, year}) => {

  var createDate = (day) => {
    return (moment().day(day).week(weekNumber).year(year).format('DD-MM'));
  }

  var saveHandler = () => {
    alert('we gaan lekker saven');
  }

  return (
    <div>
      <table>
        <caption>Week {weekNumber}</caption>
        <thead>
          <th></th>
          <th>Monday {createDate("Monday")}</th>
          <th>Tuesday {createDate("Tuesday")}</th>
          <th>Wednesday {createDate("Wednesday")}</th>
          <th>Thursday {createDate("Thursday")}</th>
          <th>Friday {createDate("Friday")}</th>
        </thead>
        <tbody>
          <tr>
            <th>project x</th>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
          </tr>
        </tbody>
      </table>
      <button type="button" onClick={saveHandler}>save</button>
    </div>
  );
};

export default Week;
