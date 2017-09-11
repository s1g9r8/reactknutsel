
import React from 'react';

import moment from 'moment';

const ProjectListItem = ({id, name, customer, startDate, endDate, removeProject, editProject}) => {

  var handleOnclickRemove = () => {
    removeProject(id);
  }

  var handleOnclickEdit = () => {
    editProject(id);
  }

  var formatDate = (date) => {
    if (date !== undefined) {
      return moment(date).format('DD-MM-YYYY')
    }
  }

  return (
    <tr className="project">
      <td>{name}</td>
      <td>{customer}</td>
      <td>{formatDate(startDate)}</td>
      <td>{formatDate(endDate)}</td>
      <td>
        <button className='button-image button-edit' onClick={handleOnclickEdit}>edit</button>
        <button className='button-image button-remove' onClick={handleOnclickRemove}>remove</button>
      </td>
    </tr>
  );
}

export default ProjectListItem;
