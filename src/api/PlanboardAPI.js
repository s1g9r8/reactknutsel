import $ from 'jquery';

// WEEKS
export var getWeeks = () => {
  var stringWeeks = localStorage.getItem('weeks');
  var weeks = [];

  try {
    weeks = JSON.parse(stringWeeks);
  } catch (e) {}

  return $.isArray(weeks) ? weeks : [];
};

export var setWeeks = (weeks) => {
  if ($.isArray(weeks)) {
    localStorage.setItem('weeks', JSON.stringify(weeks));
    return weeks;
  }
};

// PROJECTS
export var getProjects = () => {
  var stringProjects = localStorage.getItem('projects');
  var projects = [];

  try {
    projects = JSON.parse(stringProjects);
  } catch (e) {}

  return $.isArray(projects) ? projects : [];
};

export var addProject = (project) => {
    alert("API " + JSON.stringify(project));
    var existingProjects = $.isArray(getProjects()) ? getProjects() : [];
      alert("API " + JSON.stringify(existingProjects));
    var newProjects = existingProjects.push(project);
    alert("API " + JSON.stringify(newProjects));
    localStorage.setItem('projects', JSON.stringify(newProjects));
    return null;
};

export var updateProject = (projects) => {
  //alert("API " + JSON.stringify(projects));
  if ($.isArray(projects)) {
    localStorage.setItem('projects', JSON.stringify(projects));
    return projects;
  }
};

export var removeProject = (projects) => {
  //alert("API " + JSON.stringify(projects));
  if ($.isArray(projects)) {
    localStorage.setItem('projects', JSON.stringify(projects));
    return projects;
  }
};
