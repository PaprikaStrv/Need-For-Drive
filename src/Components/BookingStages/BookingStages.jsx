import React from "react";
import s from "./BookingStages.module.scss";
import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";
import nextStep from "../../Images/next_step.svg";

const BookingStages = (props) => {
  return (
    <div className={s.orderStepsWrapper}>
      <div className={s.orderStep}>
        <NavLink to="/need-for-drive/bookCar/">
          <button className={s.stepLinks}>Местоположение</button>
        </NavLink>

        <ReactSVG src={nextStep} className={s.nextStepIcon} />
      </div>

      <div className={s.orderStep}>
        <NavLink to="/need-for-drive/bookCar/Model">
          <button disabled={props.isModelAvail} className={s.stepLinks}>
            Модель{" "}
          </button>
        </NavLink>

        <ReactSVG src={nextStep} className={s.nextStepIcon} />
      </div>

      <div className={s.orderStep}>
        <NavLink to="/">
          <button disabled={true} className={s.stepLinks}>
            Дополнительно
          </button>
        </NavLink>

        <ReactSVG src={nextStep} className={s.nextStepIcon} />
      </div>

      <div className={s.orderStep}>
        <NavLink to="/">
          <button disabled={true} className={s.stepLinks}>
            Итого
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default BookingStages;
