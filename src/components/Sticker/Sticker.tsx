import React from "react";

import sticker from "../../img/sticker.png";

import './Sticker.scss';

const Sticker = () => {
  const stickerRef = React.useRef<any>();
  const [rotate, setRotate] = React.useState<string>("0");

  const rotateSticker = () => {
    // stickerRef.current.style.transform = "rotate(" + window.scrollY/2 + "deg)";
    setRotate(window.scrollY/4 + "deg");
  };
  
  React.useEffect(() => {
    window.addEventListener("scroll", rotateSticker);
  
    return (() => {
      window.removeEventListener("scroll", rotateSticker);
    })
  },[]);

  return (
    <div className="sticker" ref={stickerRef} style={{transform:"rotate("+rotate+")"}}>
      <img src={sticker} alt="Nature sticker" />
    </div>
  );
};

export default Sticker;
