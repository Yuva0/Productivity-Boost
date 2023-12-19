import React from "react";
import "./Page1.scss";
import dumbbell from "../../img/dumbbell.png";
import Marquee from "../../components/Marquee/Marquee.tsx";
import Sticker from "../../components/Sticker/Sticker.tsx";

const Page1 = () => {
  return (
    <div className="page1-container">
      <div className="page1-slogan page1-slogan-part1">Hydrate Activate</div>
      <div className="page1-slogan page1-slogan-image-container">
        <img src={dumbbell} alt="Dumbbell" className="page1-slogan-image" />
      </div>
      <div className="page1-slogan page1-slogan-part2">Elevate Dominate</div>
      <div className="page1-sticker">
        <Sticker/>
      </div>
      <Marquee/>
    </div>
  );
};

export default Page1;
