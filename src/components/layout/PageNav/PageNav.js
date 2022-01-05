import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const PageNav = props => (
  <nav>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
  </nav>
);

export default PageNav;
