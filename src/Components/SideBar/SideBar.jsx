import React from "react";
import { ReactSVG } from "react-svg";
import s from "./SideBar.module.scss";
import menu_btn from "../../Images/menu_btn.svg";
import close_menu_btn from "../../Images/close_menu_btn.svg";

const SideBar = (props) => {
  return (
    <div className={s.sideBarWrapper}>
      <button
        onClick={() => props.setActive(!props.isActive)}
        className={s.menuBtn}
      >
        {props.isActive ? (
          <ReactSVG src={close_menu_btn} />
        ) : (
          <ReactSVG src={menu_btn} className={s.openMenuBtn} />
        )}
      </button>
      <div
        className={[
          props.isActive
            ? s.langBtnWrapper + " " + s.langBtnWrapperMobile
            : s.langBtnWrapper,
        ]}
        onClick={() => props.changeSiteLang(!props.langBtnClicked)}
      >
        <button
          className={[
            props.isActive ? s.langBtn + " " + s.langBtnMobile : s.langBtn,
          ]}
          
        >
          {props.langBtnClicked ? "Eng" : "Рус"}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
