import React from 'react';
import { connect } from 'react-redux';

import SignIn from './SignIn.js';

const ModalConstructor = ({state}) => {

  switch (state.modal) {
    case 'PROJECT':
      return <SignIn {...state}/>;
    default:
      return null;
  }
}

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps, null)(ModalConstructor);
