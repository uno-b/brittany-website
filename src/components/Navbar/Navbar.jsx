import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import LogoImg from '../Image/LogoImg';

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar">
        <div className="logo-img">
          <LogoImg filename="dd-clean.jpg" alt="Logo" />
        </div>
        <ul className="menu-items">
          <li>
            <button type="button" onClick={() => scrollTo('#hero')}>
              Home
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollTo('#about')}>
              About
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollTo('#services')}>
              Services
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollTo('#contact')}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
