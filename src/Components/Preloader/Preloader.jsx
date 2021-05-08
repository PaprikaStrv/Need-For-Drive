import React from "react";
import loader from "../../Images/loader.gif";
import s from './preloader.module.scss';

const Preloader = (props) => {
  return (
    <div className={s.preloaderWrapper}>
      <img src={loader} alt="" />
    </div>
  );
};

export default Preloader;
