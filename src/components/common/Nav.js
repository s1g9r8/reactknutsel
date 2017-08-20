
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="header">
      <div className="navigation container">
        <NavLink exact to="/">Planning</NavLink>
        <NavLink to="/employees">Employees</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </div>
  );
};

export default Nav;
