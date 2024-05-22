// components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='gnb'>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><NavLink to="/modal">Modal</NavLink></li>
          <li><NavLink to="/modalmulti">ModalMulti</NavLink></li>
          <li><NavLink to="/cssmodule">CSSModule</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;