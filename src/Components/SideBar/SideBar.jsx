import React from "react";
import { ReactSVG } from "react-svg";
import s from "./SideBar.module.scss";
import menu_btn from "../../Images/menu_btn.svg";
import close_menu_btn from "../../Images/close_menu_btn.svg";

const SideBar = ({
  setActive,
  isActive,
  langBtnClicked,
  changeSiteLang
}) => {
  return (
    <div className={s.sideBarWrapper}>
      <button
        onClick={() => setActive(!isActive)}
        className={s.menuBtn}
      >
        {isActive ? (
          <ReactSVG src={close_menu_btn} />
        ) : (
          <ReactSVG src={menu_btn} className={s.openMenuBtn} />
        )}
      </button>
      <div
        className={[
          isActive
            ? s.langBtnWrapper + " " + s.langBtnWrapperMobile
            : s.langBtnWrapper,
        ]}
        onClick={() => changeSiteLang(!langBtnClicked)}
      >
        <button
          className={[
            isActive ? s.langBtn + " " + s.langBtnMobile : s.langBtn,
          ]}
          
        >
          {langBtnClicked ? "Eng" : "Рус"}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
