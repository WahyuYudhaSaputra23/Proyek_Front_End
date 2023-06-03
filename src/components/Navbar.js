import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="nabar">
    <div className="navbar-container">
      <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="navbar-logo-img" />
        </Link>
        <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/product" className="navbar-link">Product Donat</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
