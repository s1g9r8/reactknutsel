import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-bootstrap-date-picker';

import ModalWrapper from './../common/ModalWrapper.js';
import * as Actions from './../../actions/actions.js';
import * as PlanboardAPI from './../../api/PlanboardAPI.js';
import * as Constants from './../common/Constants.js';
import * as Utils from './../common/ValidationUtils.js';


const ProjectModal = ({state, actions}) => {

  // Initialize state which is modalProps and the validation object
  var modalProps = state.modal.modalProps;
  var errorText = Constants.projectModalErrorText;
  modalProps.validation = (modalProps.validation !== undefined) ?  modalProps.validation : {nameValid: undefined,
                                                                                            customerValid: undefined,
                                                                                            startDateValid: undefined,
                                                                                            endDateValid: true};

  // Implement button actions from the ModalWrapper
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

  var setConditionForEndDate = (modalProps, value) => {
    if (modalProps.startDate !== undefined && modalProps.startDate !== null ) {
      if (value < modalProps.startDate) {
        return false;
      }
    }
    return true;
  };

  // Validate and set values to state after a change in the input field
  var changeInputField = (name, value) => {
    switch (name) {
      case 'projectName': {
         modalProps = Utils.validateField(modalProps, 'nameValid', 'errorTextName', errorText.name, (value.length < 26), false, value);
         modalProps.name = value;
        }
        break;
      case 'customer': {
          modalProps = Utils.validateField(modalProps, 'customerValid', 'errorTextCustomer', errorText.customer, (value.length < 26), false, value);
          modalProps.customer = value;
        }
        break;
      case 'startDate': {
          modalProps = Utils.validateField(modalProps, 'startDateValid', 'errorTextStartDate', errorText.startDate, true, false, value);
          modalProps.startDate = value;
          // TODO: find out why this event trigger is not working!!
          document.getElementById('endDate').dispatchEvent(new Event('change',{bubbles: true}));
        }
        break;
      case 'endDate': {
        let condition = setConditionForEndDate(modalProps, value);
        modalProps = Utils.validateField(modalProps, 'endDateValid', 'errorTextEndDate', errorText.endDate, condition, true, value);
        modalProps.endDate = value;
        }
        break;
      default:
        ''
        break;
    }
    actions.showModal(state.modal.currentModal, modalProps);
    modalProps.okDisabled = !Utils.allValid(modalProps.validation);
  }

  var handleOnChange = (e) => {
    changeInputField(e.target.name, e.target.value);
  }

  var handleOnChangeStartDate = (value, formattedValue) => {
    changeInputField("startDate", value);
  }

  var handleOnChangeEndDate = (value, formattedValue) => {
    changeInputField("endDate", value);
  }

  return (
    <ModalWrapper title="Project" okText={'Save'} okDisabled={modalProps.okDisabled} onOk={onOk} closeModal={closeModal}>
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
            <DatePicker id="endDate" name="endDate" value={modalProps.endDate} onChange={handleOnChangeEndDate} />
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
