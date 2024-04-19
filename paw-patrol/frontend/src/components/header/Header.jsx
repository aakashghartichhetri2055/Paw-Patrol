import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Paw-Patrol.jpg';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">
          <img src= {logo} alt="Paw Patrol" />
        </Link>
      </div>
      <nav>
        <ul className="nav-menu">
          <li><Link to="/" className="btn btn-home">Home</Link></li>
          <li><Link to="/about" className="btn btn-about">About</Link></li>
          <li><Link to="/media" className="btn btn-media">Media</Link></li>
          <li><Link to="/contact" className="btn btn-contact">Contact</Link></li>
          <li><Link to="/signup" className="btn btn-signup">SignUp</Link></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;
