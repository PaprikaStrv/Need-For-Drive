import React from "react";
import slide from "../../Images/slider.png";
import slide1 from "../../Images/slide1.png";
import slide2 from "../../Images/slide2.png";
import slide3 from "../../Images/slide3.png";
import s from "./slide.module.css";

const SimpleSlider = (props) => {
  return (
    <div className={s.sliderWrapper}>
      <img src={slide} className={s.slideImg} />
    </div>
  );
};
export default SimpleSlider;
