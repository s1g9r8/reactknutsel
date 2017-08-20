import React from 'react';

const ProjectList = ({ projects, removeProject }) => {

  //alert(JSON.stringify(projects));
  var renderProjects = () => {
    if (Object.keys(projects).length >= 1) {
      return projects.map((project) => {
        return (<Project key={project.id} {...project} removeProject={removeProject}/>);
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


// Project used in ProjectList
const Project = ({ id, name, customer, startDate, endDate, removeProject}) => {

  var handleOnclick = () => {
    removeProject(id);
  }

  return (
    <div className="project">
      <span>{name}</span>
      <span>{customer}</span>
      <span>{startDate}</span>
      <span>{endDate}</span>
      <button onClick={handleOnclick}>remove</button>
    </div>
  );
}
