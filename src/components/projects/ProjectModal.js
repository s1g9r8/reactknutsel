
import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';


const ProjectModal = ({ id, project, changeInputField }) => {

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
    <form id="addProjectForm">
      <div className="form-item">
        <label for="projectName">Projectname *</label>
        <span className="input-group"><input type="text" name="projectName" value={project.name} onChange={handleOnChange}/></span>
        <span className="error-text">{project.errorText.name}</span>
      </div>
        <div className="form-item">
          <label for="customer">Customer *</label>
          <span className="input-group"><input type="text" name="customer" value={project.customer} onChange={handleOnChange}/></span>
          <span className="error-text">{project.errorText.customer}</span>
        </div>
        <div className="form-item">
          <label for="startDate" >Startdate *</label>
          <DatePicker name="startDate" dateFormat="DD/MM/YYYY" value={project.startDate} onChange={handleOnChangeStartDate} />
          <span className="error-text">{project.errorText.startDate}</span>
        </div>
        <div className="form-item">
          <label for="endDate">Enddate</label>
          <DatePicker dateFormat="DD/MM/YYYY" name="endDate" value={project.endDate} onChange={handleOnChangeEndDate} />
        </div>
    </form>
  );
};

export default ProjectModal;
