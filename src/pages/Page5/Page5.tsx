import React from "react";
import "./Page5.scss";
import purity from "../../img/purity.png";
import convenient from "../../img/convenient.png";
import heartbeat from "../../img/heartbeat.png";
import sustain from "../../img/sustain.png";
import trust from "../../img/trust.png";

const Page5 = () => {
  return (
    <div className="page5-container">
      {/* <div className="page5-image"><img src={nature} alt="Bottles"/></div> */}
      <div className="page5-main-title">Benefits</div>
      <div className="page5-categories">
        <div className="page5-category">
          <div className="page5-image">
            <img src={purity} alt="Purity" />
          </div>
          <div className="page5-title">Purity</div>
          <div className="page5-description">
            Exceptionally purified water for freshness.
          </div>
        </div>
        <div className="page5-category">
          <div className="page5-image">
            <img src={convenient} alt="Convenience" />
          </div>
          <div className="page5-title">Convenience</div>
          <div className="page5-description">
            Easy to carry bottles for on-the-go.
          </div>
        </div>
        <div className="page5-category">
          <div className="page5-image">
            <img src={heartbeat} alt="Health" />
          </div>
          <div className="page5-title">Health</div>
          <div className="page5-description">
            Rich in minerals for better hydration.
          </div>
        </div>
        <div className="page5-category">
          <div className="page5-image">
            <img src={sustain} alt="Sustainability" />
          </div>
          <div className="page5-title">Sustainability</div>
          <div className="page5-description">
            Environmentally conscious packaging.
          </div>
        </div>
        <div className="page5-category">
          <div className="page5-image">
            <img src={trust} alt="Trust" />
          </div>
          <div className="page5-title">Trust</div>
          <div className="page5-description">
            Reliable and satisfying hydration.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
