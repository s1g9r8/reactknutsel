import React from 'react';

const Employees = () => {

  var employees = [{id: 1, name: 'suzanne', hours: 36},
                   {id: 2, name: 'danny', hours: 36},
                   {id: 3, name: 'olger', hours: 40},
                   {id: 4, name: 'han', hours: 40}];

  return (
    <div>
      <h1>Employees</h1>
      {JSON.stringify(employees)};
    </div>
  );
}

export default Employees;
