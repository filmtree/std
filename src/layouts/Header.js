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
          <li><NavLink to="/modal">ModalFade</NavLink></li>
          <li><NavLink to="/modalmulti">ModalMulti</NavLink></li>
          <li><NavLink to="/modaltab">ModalFadeTab</NavLink></li>
          <li><NavLink to="/modalcsstransition">ModalCSSTransition</NavLink></li>
          <li><NavLink to="/tooltip">Tooltip</NavLink></li>
          <li><NavLink to="/cssmodule">CSSModule</NavLink></li>
          <li><NavLink to="/colorpage">Context ColorPage</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;