import React from "react";
import { ReactSVG } from "react-svg";
import city from "../../Images/map_city.svg";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (

    <div className={s.headerWrapper}>
         <NavLink to="/need-for-drive">
        <span className={s.headerLogo}>Need for drive</span>
        <div className={s.currentCity}>
          <ReactSVG src={city} />
          <span className={s.city}>Ульяновск</span>
        </div>
        </NavLink>
    </div>
   
  );
};

export default Header;
