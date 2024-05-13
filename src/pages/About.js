// pages/About.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <Link to={"/about/location"}>Location</Link>
      <div>
        {/* 중첩라우팅 */}
        <Outlet />
      </div>
    </div>
  );
};

export default About;