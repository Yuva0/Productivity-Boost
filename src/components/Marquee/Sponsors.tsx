import React from "react";
import apple from "../../img/apple.png";
import maxthon from "../../img/maxthon.png";
import microsoft from "../../img/microsoft.png";
import nike from "../../img/nike.png";
import netflix from "../../img/netflix.png";
import amd from "../../img/amd.png";
import hitachi from "../../img/hitachi.png";
import android from "../../img/android.png";
import appStore from "../../img/apps-store.png";
import Marquee from "react-fast-marquee";

import "./Sponsors.scss";

const Sponsors = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-title">Our Sponsors</div>
      <Marquee speed={75}>
        <div className="marquee-companies">
          <div className="marquee-company">
            <img src={netflix} alt="Netflix" />
            <div className="marquee-company-name">Netflix</div>
          </div>
          <div className="marquee-company">
            <img src={apple} alt="Apple" />
            <div className="marquee-company-name">Apple</div>
          </div>
          <div className="marquee-company">
            <img src={maxthon} alt="Maxthon" />
            <div className="marquee-company-name">Maxthon</div>
          </div>
          <div className="marquee-company">
            <img src={microsoft} alt="Microsoft" />
            <div className="marquee-company-name">Microsoft</div>
          </div>
          <div className="marquee-company">
            <img src={nike} alt="Nike" />
            <div className="marquee-company-name">Nike</div>
          </div>
          <div className="marquee-company">
            <img src={amd} alt="AMD" />
            <div className="marquee-company-name">AMD</div>
          </div>
          <div className="marquee-company">
            <img src={hitachi} alt="Hitachi" />
            <div className="marquee-company-name">Hitachi</div>
          </div>
          <div className="marquee-company">
            <img src={android} alt="android" />
            <div className="marquee-company-name">Android</div>
          </div>
          <div className="marquee-company">
            <img src={appStore} alt="App Store" />
            <div className="marquee-company-name">App Store</div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Sponsors;
