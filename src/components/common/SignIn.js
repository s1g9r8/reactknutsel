import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';

import ModalWrapper from './ModalWrapper.js';
import * as Actions from './../../actions/actions.js';


const SignIn = (props) => {

  var { name, customer, startDate, endDate, addProject, changeAddProjectField } = props;

  const signIn = (provider) => {
    props.hideModal();
    props.signIn(provider);
  };

  var closeModal =  () => {
      alert("in de close");
      //actions.showModalAddProject();
  }

  var hideModal = () => {

  }

  var handleOnChange = (e) => {
    changeAddProjectField(e.target.name, e.target.value);
  }

  var handleOnChangeStartDate = (value, formattedValue) => {
    changeAddProjectField("startDate", formattedValue);
  }

  var handleOnChangeEndDate = (value, formattedValue) => {
    changeAddProjectField("endDate", formattedValue);
  }

  return (
    <ModalWrapper {...props} title="project" okText={'save'} closeModal={closeModal}>
      <div className="project-form">
        <form id="addProjectForm">
          <div className="project-form-item">
            <label for="projectName">Projectname</label>
            <span><input type="text" name="projectName" value={name} onChange={handleOnChange}/></span>
          </div>
          <div className="project-form-item">
            <label for="customer">Customer</label>
            <span><input type="text" name="customer" value={customer} onChange={handleOnChange}/></span>
          </div>
          <div className="project-form-item">
            <label for="startDate" >Startdate</label>
            <DatePicker name="startDate" value={startDate} onChange={handleOnChangeStartDate} />
          </div>
          <div className="project-form-item">
            <label for="endDate">Enddate</label>
            <DatePicker name="endDate" value={endDate} onChange={handleOnChangeEndDate} />
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default SignIn;
