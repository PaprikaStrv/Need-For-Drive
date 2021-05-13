import React from "react";
import s from "./BookingStages.module.scss";
import { NavLink } from "react-router-dom";

const BookingStages = ({isModelAvail, modelName, color, rate}) => {
  return (
    <div className={s.orderStepsWrapper}>
      <div className={s.orderStepsContainer}>
        <div className={s.orderStep}>
          <NavLink to="/need-for-drive/bookCar/">Местоположение</NavLink>
        </div>

        <div className={s.orderStep}>
          <NavLink
            to="/need-for-drive/bookCar/Model"
            className={isModelAvail ? s.disabled : ""}
          >
            Модель{" "}
          </NavLink>
        </div>

        <div className={s.orderStep}>
          <NavLink
            to="/need-for-drive/bookCar/Additionally"
            className={!modelName ? s.disabled : ""}
          >
            Дополнительно
          </NavLink>
        </div>

        <div className={s.orderStep}>
          <NavLink to="/" className={!color && !rate ? s.disabled : ""}>
            Итого
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BookingStages;
