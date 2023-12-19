import React from "react";

import sea from '../../img/sea.png'
import logo from '../../img/logo.jpeg';

import './Header.scss';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-categories">
        <div className="header-category">Products</div>
        <div className="header-category">Benefits</div>
        <div className="header-image">
          <img src={logo} alt="Logo"/>
        </div>
        <div className="header-category">About</div>
        <div className="header-category">Contact</div>
      </div>
      <div className="header-waves">
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
        <div className="header-wave"></div>
      </div>
    </div>
  );
};

export default Header;
