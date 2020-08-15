import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Nav/NavBar.scss";
import logo from "../../public/AR.svg";

const style = {
  topPage: {
    display: "flex",
    height: "275px",
    position: "sticky",
    margin: "auto",
  },
  notTopPage: {
    display: "flex",
    height: "50px",
    position: "sticky",
    top: "50px",
  },
};

export default function Navbar() {
  const [logoStyle, setLogoStyle] = useState(style.topPage);

  window.onscroll = function () {
    !window.pageYOffset
      ? setLogoStyle(style.topPage)
      : setLogoStyle(style.notTopPage);
  };

  return (
    <nav id="mainNav">
      <div className="linkContainer">
        <NavLink className="link" id="homeLink" exact to="/">
          <div className="imageContainer" style={logoStyle}>
            <img src={logo} alt="AR" />
          </div>
        </NavLink>
        <NavLink className="link" id="Alizée" to="/Alizée"></NavLink>
      </div>
    </nav>
  );
}
