import React from "react";
import s from "./BurgerMenu.module.scss";
import close_menu_btn from "../../Images/close_menu_btn.svg";
import { ReactSVG } from "react-svg";
import tg from '../../Images/Telegram_white.svg';
import fb from '../../Images/Facebook_white.svg';
import inst from '../../Images/Instagram_white.svg';

const BurgerMenu = (props) => {
  return (
    <div className={s.burgerMenuWrapper}>
      <div className={s.burgerMenuContainer}>
        <div>
          <div className={s.burgerMenuLinks}>
            <a href="#">ПАРКОВКА</a>
            <a href="#">СТРАХОВКА</a>
            <a href="#">БЕНЗИН</a>
            <a href="#">ОБСЛУЖИВАНИЕ</a>
          </div>
          <div className={s.socialLinks}>
            <a href="#"><ReactSVG src={tg}/></a>
            <a href="#"><ReactSVG src={fb}/></a>
            <a href="#"><ReactSVG src={inst}/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
