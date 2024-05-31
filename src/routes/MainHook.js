// useRoutes 훅 라우터
import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Location from "../pages/Location";
import Profiles from "../pages/Profiles";
import Profile from "../pages/Profile";
import Modal from "../ui/userhookmodal/Modal";
import ModalTab from "../ui/userhookmodal/ModalFadeTab";
import ModalMulti from "../ui/userhookmodal/ModalTabMulti";
import ModalCSSTransition from "../ui/userhookmodal/ModalCSSTransition";
import CSSModule from "../assets/css/CSSModule";
import StyledComponent from "../components/10StyledComponent";
import ColorPage from "../contexts/ColorPage";
import Tooltip from "../ui/usetooltip/TooltipApp"
import NotFound from "../routes/NotFound";

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
      element: <Profiles />,
      children: [
        {
          path: ":username",
          element: <Profile />,
        },
        {
          path: "*",
          element: <div>유저를 선택해주세요.</div>
        },
      ],
    },
    // 사용자 Hook
    {
      path: "/modal",
      element: <Modal />
    },
    {
      path: "/modaltab",
      element: <ModalTab />
    },
    {
      path: "/modalmulti",
      element: <ModalMulti />
    },
    {
      path: "/modalcsstransition",
      element: <ModalCSSTransition />
    },
    {
      path: "/cssmodule",
      element: <CSSModule />
    },
    {
      path: "/styledcomponent",
      element: <StyledComponent />
    },
    {
      path: "/colorpage",
      element: <ColorPage />
    },
    {
      path: "/tooltip",
      name: "tooltip",
      element: <Tooltip />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return (
    <main className="container"> 
      { routes }
    </main>
  )
};

export default Main;