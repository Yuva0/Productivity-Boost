import React from "react";
import "./Page5.scss";
import nature from "../../img/nature.jpg";

const Page5 = () => {
  return (
    <div className="page5-container">
      {/* <div className="page5-image"><img src={nature} alt="Bottles"/></div> */}
      <div className="page5-title">Benefits</div>
      <div  className="page5-categories">
        <div className="page5-category">
          <div className="page5-title">Purity</div>
          <div className="page5-description">VitalFlow boasts exceptional purity due to rigorous filtration processes or sourcing from natural, pristine locations.</div>
        </div>
        <div className="page5-category">
          <div className="page5-title">Mineral Enrichment</div>
          <div className="page5-description"></div>
        </div>
        <div className="page5-category">
          <div className="page5-title">Sustainability</div>
          <div className="page5-description"></div>
        </div>
        <div className="page5-category">
          <div className="page5-title">Health and Wellness</div>
          <div className="page5-description"></div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
