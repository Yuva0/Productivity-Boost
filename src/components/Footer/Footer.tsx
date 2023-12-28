import React from "react";

import footerBg from '../../img/footer.jpg'

import './Footer.scss';

const Footer = () => {
  return (
    <div style={{backgroundImage:`url(${footerBg})`}} className="footer-container">
      <div className="footer-title">Thank you for watching!</div>
      <div className="footer-categories-main">
        <div className="footer-categories">
          <div>Slogan 1</div>
          <div>Slogan 2</div>
          <div>Slogan 3</div>
        </div>
        <div className="footer-categories">
          <div>Homepage</div>
          <div>Benefits</div>
          <div>Products</div>
        </div>
        <div className="footer-categories">
          <div>Portfolio Website</div>
          <div>LinkedIn</div>
          <div>GitHub</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;