import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WeekList from './WeekList.js';
import * as Actions from './../../actions/actions.js';


const Planning = ({ state, actions }) => {

  var projects = state.projects;
  var weeks = state.weeks;

  var handleAddWeek = () => {
    actions.addWeek();
  };

  const button1 = <button>Open portal with pseudo modal</button>;


  return (
    <div>
      <h1>Planning</h1>
      <button type="button" onClick={handleAddWeek}>Add week</button>
      <WeekList weeks={weeks} projects={projects} />
    </div>
  );
}

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Planning);
