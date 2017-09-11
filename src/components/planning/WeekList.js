
import React from 'react';
import _ from 'lodash';

import WeekListItem from './WeekListItem.js';

const WeekList = ({ weeks, projects }) => {

  var renderProjects = () => {
    if (Object.keys(projects).length >= 1) {
      return _.map(projects, (project, key) => {
        return (<div>{project.name}</div>);
      });
    }
  };

  var renderWeekListItems = () => {
    if (Object.keys(weeks).length >= 1) {
      return _.map(weeks, (week, key) => {
        return (<WeekListItem key={key} id={key} {...week} />);
      });
    }
  };

  return (
    <div className='weeklist'>
      {renderProjects()}
      {renderWeekListItems()}
    </div>
  );
}

export default WeekList;
