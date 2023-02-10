import React from "react";
import "./Header.css";
import image from "../Header/GitHub-Logo.png";

const Header = () => {
  return (
    <div className="Header">
      <h1>
        <img src={image} alt="logo-github" width="300" />
      </h1>
    </div>
  );
};

export default Header;
