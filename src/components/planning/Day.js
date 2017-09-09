
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from './../../actions/actions.js';

const Day = ({props, actions}) => {
  //alert(JSON.stringify(props));
  var modalProps = {};
  var handleChangeDay = () => {
    actions.showModal('DAY', modalProps);
  }

  return (
    <div className='day-field'>
      'suzanne'
      <button onclick={handleChangeDay}>i</button>
    </div>
  );
}

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Day);
