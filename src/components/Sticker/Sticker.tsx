import React from "react";

import sticker from "../../img/sticker.png";

import './Sticker.scss';

const Sticker = () => {
  return (
    <div className="sticker">
      <img src={sticker} alt="Nature sticker" />
    </div>
  );
};

export default Sticker;
