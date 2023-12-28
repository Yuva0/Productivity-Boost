import React from "react";
import "./Page1.scss";
import dumbbell from "../../img/dumbbell.png";
import Sponsors from "../../components/Marquee/Sponsors.tsx";
import Sticker from "../../components/Sticker/Sticker.tsx";

const Page1 = () => {
  return (
    <div className="page1-container">
      <div className="page1-slogan page1-slogan-part1">Hydrate Activate</div>
      <div className="page1-slogan page1-slogan-image-container">
        <img src={dumbbell} alt="Dumbbell" className="page1-slogan-image" />
      </div>
      <div className="page1-slogan page1-slogan-part2">Elevate Dominate</div>
      <Sponsors/>
    </div>
  );
};

export default Page1;
