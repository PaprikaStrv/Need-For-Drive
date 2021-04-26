import React from "react";
import { useState } from "react";
import Main from "../Main/Main";
import SideBar from "../SideBar/SideBar";
import Slider from "../Slider/Slider";
import s from "./StrartSrceen.module.scss";
import BurgerMenu from "./../BurgerMenu/BurgerMenu";
import { Route, Switch } from "react-router";
import BookPage from "./../BookPage/BookPage";

const StartScreen = (props) => {
  const [menuIsActive, setMenuActive] = useState(false);
  const [langBtnClicked, changeSiteLang] = useState(false);
  return (
    <div className={s.startScreenWrapper}>
      {menuIsActive && <BurgerMenu />}
      <SideBar isActive={menuIsActive} setActive={setMenuActive} langBtnClicked={langBtnClicked} changeSiteLang={changeSiteLang}/>
      <Switch>
        <Route exact path="/need-for-drive">
          <Main />
          <Slider />
        </Route>
        <Route path="/bookCar">
          <BookPage />
        </Route>
      </Switch>
    </div>
  );
};

export default StartScreen;
