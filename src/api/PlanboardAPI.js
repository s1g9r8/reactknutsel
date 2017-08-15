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
