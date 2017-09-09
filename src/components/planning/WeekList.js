
import React from 'react';
import Week from './Week.js';

const WeekList = (props) => {

  var { weeks } = props;

  var renderWeeks = () => {
    if (Object.keys(weeks).length >= 1) {
      return weeks.map((week) => {
        return (<Week key={week.id} week={week} />);
      });
    }
  };

  return (
    <div>
       {renderWeeks()}
    </div>
  );

}

export default WeekList;
