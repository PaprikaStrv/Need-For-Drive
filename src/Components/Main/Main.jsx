import React from "react";
import s from "./Main.module.scss";

import BookButton from "../BookButton/BookButton";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";

const Main = (props) => {
  return (
    <div className={s.mainWrapper}>
      <Header />
      <div className={s.mainTitle}>
        <span className={s.mainLogo}>Каршеринг</span>
        <span className={s.mainLogo + " " + s.name}>Need for drive</span>
        <span className={s.mainSlog}>Поминутная аренда авто твоего города</span>
      </div>

      <NavLink to="/need-for-drive/bookCar/">
        <BookButton btnName={"Забронировать"} />
      </NavLink>

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
