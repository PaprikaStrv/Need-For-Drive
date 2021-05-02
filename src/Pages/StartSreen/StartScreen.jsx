import React from "react";
import { useState } from "react";
import Main from "../../Components/Main/Main";
import SideBar from "../../Components/SideBar/SideBar";
import Slider from "../../Components/Slider/Slider";
import s from "./StrartSrceen.module.scss";
import BurgerMenu from "../../Components/BurgerMenu/BurgerMenu";
import { Route, Switch } from "react-router";
import BookPage from './../BookPage/BookPage';

const StartScreen = (props) => {
  const [menuIsActive, setMenuActive] = useState(false);
  const [langBtnClicked, changeSiteLang] = useState(false);
  return (
    <div className={s.startScreenWrapper}>
      {menuIsActive && <BurgerMenu />}
      <SideBar
        isActive={menuIsActive}
        setActive={setMenuActive}
        langBtnClicked={langBtnClicked}
        changeSiteLang={changeSiteLang}
      />
      <Switch>
        <Route exact path="/need-for-drive">
          <Main />
          <Slider />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/bookCar"}>
          <BookPage/>
        </Route>
      </Switch>
    </div>
  );
};

export default StartScreen;
