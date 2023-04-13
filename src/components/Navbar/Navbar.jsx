import React, { useState } from "react";
import "./navbar.css";
import gericht from "../../asset/gericht.png";
import { MdMenu, MdRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__container app__container">
        <div className="navbar__logo">
          <img src={gericht} alt="logo" />
        </div>
        <ul className="navbar__links">
          <li className="navbar__link">
            <a href="#header">Home</a>
          </li>
          <li className="navbar__link">
            <a href="#about">About</a>
          </li>
          <li className="navbar__link">
            <a href="#prices">Menu</a>
          </li>
          <li className="navbar__link">
            <a href="#awards">Awards</a>
          </li>
          <li className="navbar__link">
            <a href="#find-us">Contact</a>
          </li>
        </ul>
        <div className="navbar__login">
          <a href="#login">Log In / Registration</a>
          <div className="navbar__login-separator"></div>
          <a href="#login">Book Table</a>
        </div>
        <div className="navbar__menu">
          <MdMenu
            fontSize={"3rem"}
            color="#fff"
            onClick={() => {
              setToggleMenu(true);
            }}
          />
          {toggleMenu && (
            <div className="navbar__menu-overlay scale-in-ver-top">
              <MdRestaurantMenu
                fontSize={"3rem"}
                onClick={() => {
                  setToggleMenu(false);
                }}
              />
              <ul
                className="navbar__menu-overlay__links"
                onClick={(e) => {
                  if (e.target.tagName === "A") {
                    setToggleMenu(false);
                  }
                }}>
                <li className="navbar__link">
                  <a href="#header">Home</a>
                </li>
                <li className="navbar__link">
                  <a href="#about">About</a>
                </li>
                <li className="navbar__link">
                  <a href="#prices">Menu</a>
                </li>
                <li className="navbar__link">
                  <a href="#awards">Awards</a>
                </li>
                <li className="navbar__link">
                  <a href="#find-us">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
