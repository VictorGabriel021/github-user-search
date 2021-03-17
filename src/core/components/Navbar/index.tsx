import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar-main">
    <Link to="/" className="navbar-title">Bootcamp DevSuperior</Link>
  </div>    
);

export default Navbar;