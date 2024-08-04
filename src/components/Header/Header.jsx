import React from "react";
import { useState, useRef } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuImg from "../../assets/menu.png";
import close from "../../assets/close.png";

const Header = () => {
  const [menu, setMenu] = useState("home");

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-450px";
  };
  return (
    <div className="header-container">
      <img src={logo} alt="" className="logo" />
      <img
        src={menuImg}
        alt=""
        className="menu-icon"
        style={{ width: "20px", height: "20px" }}
        onClick={openMenu}
      />
      <ul className="nav-menu" ref={menuRef}>
        <img src={close} alt="" className="nav-mob-close" onClick={closeMenu} />
        <li>
          <AnchorLink href="#home">
            <p>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset={50} href="#courses">
            <p>Courses</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about">
            <p>About</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset={50} href="#contact">
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
