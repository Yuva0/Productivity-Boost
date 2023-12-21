import React from "react";

import "./Page6.scss";
import Card from "../../components/Card/Card.tsx";
import orangeBottle from '../../img/orangeBottle.png';
import bottle from '../../img/bottle.png';
import litre_twenty from '../../img/litre_twenty.png';
import water_purifier from '../../img/water_purifier.png';
import kettle from '../../img/kettle.png';
import pitcher from '../../img/pitcher.png';

const Page6 = () => {
  return (
    <div className="page6-container">
      <div  className="page6-container-curve">
        <div className="page6-title">Our Products</div>
        <div className="page6-cardset">
          <div className="page6-cards">
            <Card image={water_purifier} alt="Water Purifier" title="Purifier" background="#bde0fe"/>
            <Card image={bottle} alt="Bottle" title="Bottles" background="#fefae0"/>
            <Card image={litre_twenty} alt="Cans" title="Cans" background="#bde0fe"/>
          </div>
          <div className="page6-cards">
            <Card image={orangeBottle} alt="Orange Bottle" title="Drinks" background="#fefae0"/>
            <Card image={kettle} alt="Kettle" title="Kettles" background="#bde0fe"/>
            <Card image={pitcher} alt="Pitcher" title="Pitchers" background="#fefae0"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
