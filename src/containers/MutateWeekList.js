
import React from 'react';
import {connect} from 'react-redux';
import {addWeek} from './../actions/actions.js';
import {weekReducer} from './../reducers/reducers.js';

const MutateWeekList = ({dispatch}) => {

  var addWeekHandler = (e) => {
    e.preventDefault()
    dispatch(addWeek({}))
  }

  return (
    <div>
      <button type="button" onClick={addWeekHandler}>add week</button>
    </div>
  )
}

export default connect()(MutateWeekList);
