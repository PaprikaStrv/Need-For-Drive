import React from "react";
import s from "./BookingStages.module.scss";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import nextStep from "../../Images/next_step.svg";

const BookingStages = (props) => {
  return (
    <div className={s.orderStepsWrapper}>
      <div className={s.orderStep}>
        <Link to="/need-for-drive/bookCar/">
          <button className={s.stepLinks}>Местоположение</button>
        </Link>

        <ReactSVG src={nextStep} className={s.nextStepIcon} />
      </div>

      <div className={s.orderStep}>
        <Link to="/need-for-drive/bookCar/Model">
          <button disabled={props.isAvail} className={s.stepLinks}>
            Модель{" "}
          </button>
        </Link>

        <ReactSVG src={nextStep} className={s.nextStepIcon} />
      </div>

      <div className={s.orderStep}>
        <Link to="/">
          <button disabled={true} className={s.stepLinks}>
            Дополнительно
          </button>
        </Link>

        <ReactSVG src={nextStep} className={s.nextStepIcon} />
      </div>

      <div className={s.orderStep}>
        <Link to="/">
          <button disabled={true} className={s.stepLinks}>
            Итого
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingStages;
