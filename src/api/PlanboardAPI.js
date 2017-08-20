import $ from 'jquery';


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

export var getProjects = () => {
  var stringProjects = localStorage.getItem('projects');
  var projects = [];

  try {
    projects = JSON.parse(stringProjects);
  } catch (e) {}

  return $.isArray(projects) ? projects : [];
};

export var setProjects = (projects) => {
  if ($.isArray(projects)) {
    localStorage.setItem('projects', JSON.stringify(projects));
    return projects;
  }
};
