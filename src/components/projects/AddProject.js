
import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';

const AddProject = ({ name, customer, startDate, endDate, addProject, changeAddProjectField }) => {

  var handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("addProjectForm").reset();
    addProject();
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
    <div className="project-form">
      <form id="addProjectForm" onSubmit={handleSubmit}>
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
        <button>Save</button>
      </form>
    </div>
  );
}

export default AddProject;
