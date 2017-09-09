
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import Week from './Week.js';
import * as Actions from './../../actions/actions.js';
import * as PlanboardAPI from './../../api/PlanboardAPI.js';

const WeekList = ({state, actions}) => {

  var weeks = state.weeks;

  var handleAddWeek = () => {
    actions.addWeek();
  };

  var handleCalculateTotalHours = () => {
    if (Object.keys(weeks).length >= 1) {
      var sum = weeks.reduce((total, obj) => {
        return total + Number(obj.monday) + Number(obj.tuesday) + Number(obj.wednesday) + Number(obj.thursday) + Number(obj.friday)
      }, 0);
      isNaN(sum)? alert('Je hebt nog niet alle uren ingevuld, ga dat eens snel doen') : alert(sum)
    }
  };

  var setHours = (id, name, value) => {
    let i = weeks.findIndex(obj => obj.id === id)
    switch (name) {
      case 'monday':
        weeks[i].monday = value;
        break;
      case 'tuesday':
        weeks[i].tuesday = value;
        break;
      case 'wednesday':
        weeks[i].wednesday = value;
        break;
      case 'thursday':
        weeks[i].thursday = value;
        break;
      case 'friday':
        weeks[i].friday = value;
        break;
      default:
        ''
        break;
    }
    actions.updateWeek(id, weeks[i]);
    //PlanboardAPI.setWeeks(weeks);
  };

  var createDate = (day, weekNumber, year) => {
    return (moment().day(day).week(weekNumber).year(year).format('DD-MM'));
  }

  var renderWeeks = () => {
    if (Object.keys(weeks).length >= 1) {
      return weeks.map((week) => {
        week.mondayDate = createDate("Monday", week.weekNumber, week.year);
        week.tuesdayDate = createDate("Tuesday", week.weekNumber, week.year);
        week.wednesdayDate = createDate("Wednesday", week.weekNumber, week.year);
        week.thursdayDate = createDate("Thursday", week.weekNumber, week.year);
        week.fridayDate = createDate("Friday", week.weekNumber, week.year);
        return (<Week key={week.id} {...week} setHours={setHours} />);
      });
    }
  };

  return (
    <div>
      <h1>Planning</h1>
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
