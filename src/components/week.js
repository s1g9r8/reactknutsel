
import React from 'react';

const Week = (props) => {

  var {
    id,
    weekNumber,
    year,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    mondayDate,
    tuesdayDate,
    wednesdayDate,
    thursdayDate,
    fridayDate,
    setHours
  } = props;

  var handleChangeHours = (e) => {
    setHours(id, e.target.name, e.target.value);
  }

  return (
    <div>
      <table>
        <caption>Week {weekNumber}</caption>
        <thead>
          <th></th>
          <th>Monday {mondayDate}</th>
          <th>Tuesday {tuesdayDate}</th>
          <th>Wednesday {wednesdayDate}</th>
          <th>Thursday {thursdayDate}</th>
          <th>Friday {fridayDate}</th>
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
    </div>
  );
};

export default Week;
