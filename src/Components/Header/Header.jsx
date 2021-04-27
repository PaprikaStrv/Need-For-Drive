import React from "react";
import { ReactSVG } from "react-svg";
import city from "../../Images/map_city.svg";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

const Header = (props) => {
  return (

    <div className={s.headerWrapper}>
         <NavLink to="/need-for-drive">
        <span className={s.headerLogo}>Need for drive</span>
        <div className={s.currentCity}>
          <ReactSVG src={city} />
          <span className={s.city}>{props.location}</span>
        </div>
        </NavLink>
    </div>
   
  );
};


const mapStateToProps = (state) => ({
  location: state.location.geolocation,
})

export default connect(mapStateToProps)(Header);
