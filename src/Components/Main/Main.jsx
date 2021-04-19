import React from "react";
import { ReactSVG } from "react-svg";
import s from "./Main.module.scss";
import city from "../../Images/map_city.svg";
import BookButton from "../BookButton/BookButton";

const Main = (props) => {
  return (
    <div className={s.mainWrapper}>
      <div className={s.headerWrapper}>
        <span className={s.headerLogo}>Need for drive</span>
        <div className={s.currentCity}>
          <ReactSVG src={city} />
          <span className={s.city}>Ульяновск</span>
        </div>
      </div>

      <div className={s.mainTitle}>
        <span className={s.mainLogo}>Каршеринг</span>
        <span className={s.mainLogo + " " + s.name}>Need for drive</span>
        <span className={s.mainSlog}>Поминутная аренда авто твоего города</span>
      </div>

      <BookButton btnName={"Забронировать"} />

      <div className={s.mainFooter}>
        <span className={s.copyright}>© 2016-2019 «Need for drive»</span>
        <a href="tel:+74952342244" className={s.phone}>
          8 (495) 234-22-44
        </a>
      </div>
    </div>
  );
};

export default Main;
