
import React from 'react';
import _ from 'lodash';

import ProjectListItem from './ProjectListItem.js';

const ProjectList = ({ projects, removeProject, editProject }) => {

  var renderProjects = () => {
    if (Object.keys(projects).length >= 1) {
      return _.map(projects, (project, key) => {
        return (<ProjectListItem key={key} id={key} {...project} removeProject={removeProject} editProject={editProject}/>);
      });
    }
  };

  return (
    <div className="project-list">
    {renderProjects()}
    </div>
  );
}
export default ProjectList;
