import React from "react";
import s from "./BurgerMenu.module.scss";
import { ReactSVG } from "react-svg";
import tg from '../../Images/Telegram_white.svg';
import fb from '../../Images/Facebook_white.svg';
import inst from '../../Images/Instagram_white.svg';

const BurgerMenu = (props) => {
  return (
    <div className={s.burgerMenuWrapper}>
      <div className={s.burgerMenuContainer}>
        <div className={s.burgerMenuLinksWrapper}>
          <div className={s.burgerMenuLinks}>
            <a href="q">ПАРКОВКА</a>
            <a href="q">СТРАХОВКА</a>
            <a href="q">БЕНЗИН</a>
            <a href="q">ОБСЛУЖИВАНИЕ</a>
          </div>
          <div className={s.socialLinks}>
            <a href="q"><ReactSVG src={tg}/></a>
            <a href="q"><ReactSVG src={fb}/></a>
            <a href="q"><ReactSVG src={inst}/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
