// components/Header.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Profiles from "../pages/Profiles";
import Location from "../pages/Location";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/about" element={<About />}>
      {/* w중첩 라우팅 존재 */}
        <Route path="location" element={<Location />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      {/*  서브 라우트 존재  */}
      <Route path="/profiles/*" element={<Profiles />} />
      
    </Routes>
  );
};

export default Main;
