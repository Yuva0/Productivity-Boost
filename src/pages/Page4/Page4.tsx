import React from "react";
import "./Page4.scss";
import nature from "../../img/nature.jpg";

const Page4 = () => {
  return (
    <div className="page4-container">
      <div className="page4-slogan">
        <div className="page4-title">"Nature's Gift,.. Bottled Brilliance"</div>
        <div className="page4-description">Positions your water as a gift from nature, bottled to offer brilliance, promoting its exceptional quality and purity.</div>
      </div>
      <div className="page4-image"><img src={nature} alt="Bottles"/></div>
    </div>
  );
};

export default Page4;
