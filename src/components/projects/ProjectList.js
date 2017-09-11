
import React from 'react';
import _ from 'lodash';

import ProjectListItem from './ProjectListItem.js';

const ProjectList = ({ projects, removeProject, editProject }) => {

  var renderProjectListItems = () => {
    if (Object.keys(projects).length >= 1) {
      return _.map(projects, (project, key) => {
        return (<ProjectListItem key={key} id={key} {...project} removeProject={removeProject} editProject={editProject}/>);
      });
    }
  };

  return (
    <table className="projects">
      <tr className="table-header">
        <th>Projectname</th>
        <th>Customer</th>
        <th>Startdate</th>
        <th>Enddate</th>
        <th></th>
      </tr>
    {renderProjectListItems()}
  </table>
  );
}
export default ProjectList;
