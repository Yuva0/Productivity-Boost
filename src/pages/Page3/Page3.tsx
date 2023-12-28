import React from "react";
import "./Page3.scss";
import energy from "../../img/energy.png";

const Page3 = () => {
  return (
    <div className="page3-container">
      <div className="page3-image">
        <img src={energy} alt="Bottles" />
      </div>
      <div className="page3-slogan">
        <div className="page3-title">
          "Elevate Energy,.. Drink the Difference"
        </div>
        <div className="page3-description">
          Consuming your water can elevate energy levels, and by choosing
          VitalFlow, customers are making a positive difference in their
          hydration.
        </div>
      </div>
    </div>
  );
};

export default Page3;
