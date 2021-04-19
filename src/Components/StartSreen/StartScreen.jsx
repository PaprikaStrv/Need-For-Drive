import React from "react";
import { useState } from "react";
import Main from "../Main/Main";
import SideBar from "../SideBar/SideBar";
import Slider from "../Slider/Slider";
import s from "./StrartSrceen.module.scss";
import SimpleSlider from "./../Slider/Slider";
import BurgerMenu from "./../BurgerMenu/BurgerMenu";

const StartScreen = (props) => {
  const [menuIsActive, setMenuActive] = useState(false);
  return (
    <div className={s.startScreenWrapper}>
      {menuIsActive && <BurgerMenu/>}
      <SideBar isActive={menuIsActive} setActive={setMenuActive} />
      <Main />
      <SimpleSlider />
    </div>
  );
};

export default StartScreen;
