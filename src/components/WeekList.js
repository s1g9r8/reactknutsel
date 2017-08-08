import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import uuid from 'uuid';
import moment from 'moment';

import Week from './Week.js';
import * as Actions from './../actions/actions.js';

const WeekList = ({state, actions}) => {

  var weeks = state;

  var handleAddWeek = () => {
    actions.addWeek();
  };

  var handleCalculateTotalHours = () => {
    if (Object.keys(weeks).length >= 1) {
      var sum = weeks.reduce((total, obj) => {
        return total + Number(obj.monday) + Number(obj.tuesday) + Number(obj.wednesday) + Number(obj.thursday) + Number(obj.friday)
      }, 0);
      if (!isNaN(sum)) {
        alert(sum);
      } else {
        alert('Je hebt nog niet alle uren ingevuld, ga dat eens snel doen');
      }
    }
  };

  var setHoursToState = (id, name, value) => {
    let i = weeks.findIndex(obj => obj.id === id)
    switch (name) {
      case 'monday':
        return weeks[i].monday = value;
      case 'tuesday':
        return weeks[i].tuesday = value;
      case 'wednesday':
        return weeks[i].wednesday = value;
      case 'thursday':
        return weeks[i].thursday = value;
      case 'friday':
        return weeks[i].friday = value;
      default:
        return '';
    }
  };

  var saveHoursToStore = (weekId) => {
    // TODO: function to save hours to the store
  };

  var renderWeeks = () => {
    if (Object.keys(weeks).length >= 1) {
      return weeks.map((week) => {
        return (<Week key={week.id} {...week} setHours={setHoursToState} saveHours={saveHoursToStore}/>);
      });
    }
  };

  return (
    <div>
      <div>{renderWeeks()}</div>
      <div>
        <button type="button" onClick={handleAddWeek}>add week</button>
        <button type="button" onClick={handleCalculateTotalHours}>calculate</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(WeekList);
