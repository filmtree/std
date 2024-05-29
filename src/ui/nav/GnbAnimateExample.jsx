import React, { useRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const SubMenuWrap = styled.ul`
  position: absolute;
  width: 100%;
  overflow: hidden;
  max-height: 0;
  background-color: #333333;
`;

const Navilists = [
  { id: 1, name: "home", el: "/", child: [] },
  {
    id: 2,
    name: "one",
    el: "/one",
    child: [
      { id: 21, name: "one1", el: "/childone1" },
      { id: 22, name: "one2", el: "/childone2" },
      { id: 23, name: "one3", el: "/childone3" },
      { id: 24, name: "one4", el: "/childone4" },
    ],
  },
  {
    id: 3,
    name: "two",
    el: "/two",
    child: [
      { id: 31, name: "two1", el: "/childtwo1" },
      { id: 32, name: "two2", el: "/childtwo2" },
    ],
  },
  {
    id: 4,
    name: "three",
    el: "/three",
    child: [{ id: 41, name: "three1", el: "/childthree1" }],
  },
  {
    id: 5,
    name: "four",
    el: "/four",
    child: [
      { id: 51, name: "four1", el: "/childfour1" },
      { id: 52, name: "four2", el: "/childfour2" },
      { id: 53, name: "four3", el: "/childfour3" },
    ],
  },
];

const activeStyle = {
  fontWeight: "bold",
  color: "#FFFFFF",
};

const HeaderItem = ({ index, title, id, link, subList }) => {
  
  const subMenu = useRef(null);

  /* isCustomActive 임의의 사용자 클래스를 설정해야 한다면 */
  const [isCustomActive, setIsCustomActive] = useState(false);
  useEffect(() => {
    // link값을 브라우저 주소와 비교하여 isCustomActive 설정
    setIsCustomActive(window.location.pathname === link);
  }, [link]);

  const handleMouseEnter = (index) => {
    const element = subMenu.current;
    element.animate(
      [
        { maxHeight: "0px", opacity: 1 }, // start state
        { maxHeight: `${element.scrollHeight}px`, opacity: 1 }, // end state
      ],
      {
        duration: 300, // duration in milliseconds
        fill: "forwards", // ensures that element retains the style values defined by the last keyframe
      }
    );
  };

  const handleMouseLeave = () => {
    const element = subMenu.current;
    element.animate(
      [
        { maxHeight: `${element.scrollHeight}px`, opacity: 1 }, // start state
        { maxHeight: "0px", opacity: 1 }, // end state
      ],
      {
        duration: 300, // duration in milliseconds
        fill: "forwards", // ensures that element retains the style values defined by the last keyframe
      }
    );
  };

  return (
    <li
      className="gnb-list"
      key={id}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      {/* 해당 페이지에 사용자 클래스 적용해야 한다면... */}
      <span className={`gnb-sub-text ${ isCustomActive ? "custom-active" : "" }`}>
      </span>

      {/* NavLink의 기본 active 설정용 변수 isActive 활용 */}

      <NavLink
        to={link}
        style={({ isActive }) => (isActive ? activeStyle : {})}
        className={({ isActive }) =>
          isActive ? "gnb-item is-active" : "gnb-item "
        }
      >
        {title}
      </NavLink>

      <SubMenuWrap ref={subMenu} className="gnb-sub-lists">
        {subList.map((sub) => {
          return (
            // <li className="gnb-sub-list" key={sub.id}>
            <li
              className={`gnb-sub-list ${
                sub.el === window.location.pathname ? "active" : ""
              }`}
              key={sub.id}
            >
              <Link to={sub.el} className="gnb-sub-list-item">
                {sub.name}
              </Link>
            </li>
          );
        })}
      </SubMenuWrap>
    </li>
  );
};

const Header = () => {
  return (
    <div className="gnb-wrapper">
      <ul className="gnb-lists">
        {Navilists.map((list, index) => (
          <HeaderItem
            key={index}
            index={index}
            title={list.name}
            id={list.id}
            link={list.el}
            subList={list.child}
          />
        ))}
        ;
      </ul>
    </div>
  );
};

export default Header;
