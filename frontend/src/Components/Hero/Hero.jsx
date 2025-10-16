import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_img.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2> NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" height={70} width={70} />
          </div>
          <p>collection</p>
          <p>for everyone!</p>
        </div>
        <div className="hero-lastes-btn">
          <div>Lastest colection</div>
          <img src={arrow_icon} alt="" height={40} width={40} />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" height={700} width={700} />
      </div>
    </div>
  );
};
