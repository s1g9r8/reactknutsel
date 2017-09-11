
import React from 'react';
import moment from 'moment';
import _ from 'lodash';

const WeekListItem = ({ id, weekNumber, year, projects}) => {

  var createDate = (day, weekNumber, year) => {
    return (moment().day(day).week(weekNumber).year(year).format('DD-MM'));
  };

  var beginOfWeek = createDate("Monday",weekNumber, year);
  var endOfWeek = createDate("Friday", weekNumber, year);

  var renderProjectPlanningFields = () => {
    if (Object.keys(projects).length >= 1) {
      return _.map(projects, (project, key) => {
        return (<ProjectPlanningField key={key} id={key} project={project} />);
      });
    }
  };

  return (
    <div>
      <h1>{weekNumber} {beginOfWeek}/{endOfWeek}</h1>
      <div>{renderProjectPlanningFields()}</div>
    </div>
  );
}

export default WeekListItem;


const ProjectPlanningField = ({id,  project}) => {

  var renderProjectList = () => {
    if (Object.keys(project).length >= 1) {
      return _.map(project, (employee, key) => {
        return (<li>{employee.name}: {employee.hours}</li>);
      });
    }
  }
  return (
    <div>
      <button>edit</button>
      <ul>{renderProjectList()}</ul>
    </div>
  );
}
