
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ModalWrapper from './../common/ModalWrapper.js';
import * as Actions from './../../actions/actions.js';

const DayModal = ({state, actions}) => {
  return (
    <div>test</div>
  );
}

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DayModal);
