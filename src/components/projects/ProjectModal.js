import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-bootstrap-date-picker';

import ModalWrapper from './../common/ModalWrapper.js';
import * as Actions from './../../actions/actions.js';


const ProjectModal = ({state, actions}) => {

  var modalProps = state.modal.modalProps;

  var closeModal = () => {
      actions.showModal('default');
  }

  var onOk = () => {
    if (state.modal.modalProps.id) {
      actions.updateProject(modalProps.id, modalProps.name, modalProps.customer, modalProps.startDate, modalProps.endDate);
    }
    else {
      actions.addProject(modalProps.name, modalProps.customer, modalProps.startDate, modalProps.endDate);
      //PlanboardAPI.setProjects([{projects},{newProject}]);
    }
    closeModal();
  }

  var changeAddProjectField = (name, value) => {
    switch (name) {
      case 'projectName':
        modalProps.name = value;
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
    <ModalWrapper title="project" okText={'save'} onOk={onOk} closeModal={closeModal}>
      <div className="project-form">
        <form id="addProjectForm">
          <div className="project-form-item">
            <label for="projectName">Projectname</label>
            <span><input type="text" name="projectName" value={modalProps.name} onChange={handleOnChange}/></span>
          </div>
          <div className="project-form-item">
            <label for="customer">Customer</label>
            <span><input type="text" name="customer" value={modalProps.customer} onChange={handleOnChange}/></span>
          </div>
          <div className="project-form-item">
            <label for="startDate" >Startdate</label>
            <DatePicker name="startDate" value={modalProps.startDate} onChange={handleOnChangeStartDate} />
          </div>
          <div className="project-form-item">
            <label for="endDate">Enddate</label>
            <DatePicker name="endDate" value={modalProps.endDate} onChange={handleOnChangeEndDate} />
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModal);
