import React from 'react';
import { connect } from 'react-redux';

import ProjectModal from './../projects/ProjectModal.js';

/*
// Inspired by: https://codeburst.io/modals-in-react-f6c3ff9f4701
// Add for each modal a case in the switch
*/

const ModalConstructor = ({props}) => {

  var {modal} = props

  switch (modal.currentModal) {
    case 'PROJECT':
      return <ProjectModal />;
    default:
      return null;
  }
}

const mapStateToProps = (props) => ({props});

export default connect(mapStateToProps, null)(ModalConstructor);
