
import React from 'react';
import moment from 'moment';


const Week = ({id, weekNumber, year, monday, tuesday, wednesday, thursday, friday, actions, setHours, saveWeekHours}) => {

  var handleChangeHours = (e) => {
    // TODO: check input type is number
    setHours (id, e.target.name, e.target.value);
  }

  var handleSaveHours = () =>{
    saveWeekHours (id);
  }

  var createDate = (day) => {
    return (moment().day(day).week(weekNumber).year(year).format('DD-MM'));
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
            <td><input type="text" name="monday" value={monday} onChange={handleChangeHours}/></td>
            <td><input type="text" name="tuesday" value={tuesday} onChange={handleChangeHours}/></td>
            <td><input type="text" name="wednesday" value={wednesday} onChange={handleChangeHours}/></td>
            <td><input type="text" name="thursday" value={thursday} onChange={handleChangeHours}/></td>
            <td><input type="text" name="friday" value={friday} onChange={handleChangeHours}/></td>
          </tr>
        </tbody>
      </table>
      <button type="button" onClick={handleSaveHours}>save</button>
    </div>
  );
};

export default Week;
