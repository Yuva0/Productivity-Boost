import React from "react";
import "./Page2.scss";
import bottles from "../../img/bottles.jpg";

const Page2 = () => {
  return (
    <div className="page2-container">
      <div className="page2-slogan">
        <div className="page2-title">"Pure Refreshment,.. Every Drop Matters"</div>
        <div className="page2-description">Emphasizes the purity and importance of every drop of water, promoting refreshment and the significance of clean water consumption.</div>
      </div>
      <div className="page2-image"><img src={bottles} alt="Bottles"/></div>
    </div>
  );
};

export default Page2;
