
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Planning</NavLink>
      <NavLink to="/employees" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Employees</NavLink>
      <NavLink to="/projects" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Projects</NavLink>
    </div>
  );
};

export default Nav;
