
import React from 'react';

const ProjectListItem = ({id, name, customer, startDate, endDate, removeProject, editProject}) => {

  var handleOnclickRemove = () => {
    removeProject(id);
  }

  var handleOnclickEdit = () => {
    editProject(id);
  }

  return (
    <div className="project">
      <span>{name}</span>
      <span>{customer}</span>
      <span>{startDate}</span>
      <span>{endDate}</span>
      <button onClick={handleOnclickRemove}>remove</button>
      <button onClick={handleOnclickEdit}>edit</button>
    </div>
  );
}

export default ProjectListItem;
