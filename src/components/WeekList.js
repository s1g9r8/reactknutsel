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

  var handleCalculate = (weeks) => {
    //TODO: calculate total hours over weeks
  };

  var renderWeeks = () => {
    if (Object.keys(weeks).length >= 1) {
      return weeks.map((week) => {
        return (<Week key={week.id} {...week}/>);
      });
    }
  };

  return (
    <div>
      <div>{renderWeeks()}</div>
      <div>
        <button type="button" onClick={handleAddWeek}>add week</button>
        <button type="button" onClick={handleCalculate}>calculate</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(WeekList);
