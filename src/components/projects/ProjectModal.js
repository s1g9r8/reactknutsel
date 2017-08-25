import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-bootstrap-date-picker';

import ModalWrapper from './../common/ModalWrapper.js';
import * as Actions from './../../actions/actions.js';
import * as PlanboardAPI from './../../api/PlanboardAPI.js';
import * as Constants from './../common/Constants.js';


const ProjectModal = ({state, actions}) => {

  var modalProps = state.modal.modalProps;
  modalProps.okDisabled = true;

  var closeModal = () => {
      actions.showModal('default');
  }

  var onOk = () => {
    if (state.modal.modalProps.id) {
      actions.updateProject(modalProps.id, modalProps.name, modalProps.customer, modalProps.startDate, modalProps.endDate);
    }
    else {
      actions.addProject(modalProps.name, modalProps.customer, modalProps.startDate, modalProps.endDate);
    }
    closeModal();
  }
  // function makeNull(obj, label) {
  //   if (obj[label] === undefined) {
  //       obj[label] = null;
  //   }
  // }
  // var varB = { abc: undefined }
  // makeNull(varB, 'abc');

  var validateField = (field, label, value, errorText, condition) => {
    //alert(obj[label]);

    // if (condition) {
    //   fieldValid = true;
    //   //alert(modalProps.nameValid);
    //   errorFieldName = undefined;
    // }
    // else {
    //   fieldValid = false;
    //   //alert(modalProps.nameValid);
    //   errorFieldName = errorText;
    // }
    // fieldName = value;
  }

  var changeAddProjectField = (name, value) => {
    switch (name) {
      case 'projectName': {
        // let condition = value.length < 3;
        // var b = {m1: modalProps.name, m2: modalProps.nameValid, m3: modalProps.errorTextName}
        // validateField('modalProps.name', value, 'fout', condition);

        if (value.length < 5) {
          modalProps.nameValid = true;
          modalProps.errorTextName = '';
        }
        else {
          modalProps.nameValid = false;
          modalProps.errorTextName = "name is only 25 characters";
        }
}
        break;
      case 'customer':
        modalProps.customer = value;
        break;
      case 'startDate':
        modalProps.startDate = value;
        break;
      case 'endDate':
        modalProps.endDate = value;
        break;
      default:
        ''
        break;
    }
    actions.showModal(state.modal.currentModal, modalProps);
    allValid();

  }

  var allValid = () => {
    modalProps.okDisabled = false;
  }

  var handleOnChange = (e) => {
    changeAddProjectField(e.target.name, e.target.value);
  }

  var handleOnChangeStartDate = (value, formattedValue) => {
    changeAddProjectField("startDate", value);
  }

  var handleOnChangeEndDate = (value, formattedValue) => {
    changeAddProjectField("endDate", value);
  }

  return (
    <ModalWrapper title="Project" okText={'Save'} okDisabled={false} onOk={onOk} closeModal={closeModal}>

        <form id="addProjectForm">

          <div className="form-item">
            <label for="projectName">Projectname *</label>
            <span className="input-group"><input type="text" name="projectName" value={modalProps.name} onChange={handleOnChange}/></span>
            <span className="error-text">{modalProps.errorTextName}</span>
          </div>

          <div className="form-item">
            <label for="customer">Customer *</label>
            <span className="input-group"><input type="text" name="customer" value={modalProps.customer} onChange={handleOnChange}/></span>
            <span className="error-text">{modalProps.errorTextCustomer}</span>
          </div>

          <div className="form-item">
            <label for="startDate" >Startdate *</label>
            <DatePicker name="startDate" value={modalProps.startDate} onChange={handleOnChangeStartDate} />
            <span className="error-text">{modalProps.errorTextStartDate}</span>
          </div>

          <div className="form-item">
            <label for="endDate">Enddate</label>
            <DatePicker name="endDate" value={modalProps.endDate} onChange={handleOnChangeEndDate} />
            <span className="error-text">{modalProps.errorTextEndDate}</span>
          </div>
        </form>

    </ModalWrapper>
  );
};

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModal);
