import React from "react";

import orangeBottle from "../../img/orangeBottle.png";
import bottle from "../../img/bottle.png";

import "./Card.scss";

interface CardProps {
  image?: any;
  alt?: string;
  title?: string;
  background?: string;
}

const Card = ({ image, alt, title, background }: CardProps) => {
  return (
    <div className="card-container" style={{backgroundColor:background}}>
      <div className="card-title">{title}</div>
      <div className="card-image">
        <img className="card-image" src={image} alt={alt} />
      </div>
    </div>
  );
};

export default Card;
