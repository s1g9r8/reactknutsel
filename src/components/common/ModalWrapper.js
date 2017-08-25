
import React from 'react';
const { PropTypes } = React;

/*
// implement the functions showOk and closeModal in the parent class
*/

const ModalWrapper = props => {

  const okButton = props.showOk? (
    <button className="modal-ok" onClick={props.onOk} disabled={props.okDisabled}>{props.okText}</button>
    ) : null;

  return (
    <div className="modal-wrapper">
        <h1>{props.title}</h1>
        <button className="modal-close" onClick={props.closeModal}>Close</button>
        {props.children}
        {okButton}
    </div>
  );
};

ModalWrapper.propTypes = {
  // props
  title: PropTypes.string,
  showOk: PropTypes.bool,
  okText: PropTypes.string,
  okDisabled: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,

  // methods
  hideModal: PropTypes.func,
  onOk: PropTypes.func,
};

ModalWrapper.defaultProps = {
  title: '',
  showOk: true,
  okText: 'OK',
  okDisabled: false,
  onOk: () => {}
};

export default ModalWrapper;
