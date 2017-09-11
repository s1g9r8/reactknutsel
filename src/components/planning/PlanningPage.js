import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WeekList from './WeekList.js';
import * as Actions from './../../actions/actions.js';


const Planning = ({ state, actions }) => {

  var weeks = state.planning;
  var projects = state.projects;

  return (
    <div>
      <h1>Planning</h1>
      <button>previous</button>
      <button>next</button>
      <WeekList weeks={weeks} projects={projects} />
    </div>
  );
}

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Planning);
