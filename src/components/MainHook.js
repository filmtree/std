// useRoutes 훅 라우터

import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Profiles from "../pages/Profiles";
import Location from "../pages/Location";

const Main = () => {
  const routes = useRoutes([
    { 
      index: true,
      element: <Home />,
      exact: true
    },
    {
      path: "/about", // 중첩 라우트 
      element: <About />,
      children: [
        {
          path: "location",
          element: <Location />
        }
      ]
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/profiles/*", // 서브 라우트
      element: <Profiles />
    }
  ]);

  return routes;
};

export default Main;