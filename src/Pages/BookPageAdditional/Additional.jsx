import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";

import RadioInput from "../../Components/RaioInput/RadioInput";
import OrderInfoContainer from "./../../Components/OrderInfo/OrderInfoContainer";
import s from "./Additional.module.scss";
import baseInput from "../BookPageLocation/BookPageLocation.module.scss";
import { ReactSVG } from "react-svg";
import clean_input from "../../Images/clean_input.svg";
import CheckBoxInput from "../../Components/CheckBoxInput/CheckBoxInput";
import moment from "moment";
import "moment/locale/ru";
import "moment-duration-format";
require("moment-duration-format");

const Additional = ({
  cars,
  rate,
  color,
  modelName,
  setCarColor,
  setCarRate,
  addParams,
  setCarParams,
  setDiffDate,
}) => {
  registerLocale("ru", ru);
  moment.locale("ru");
  let filteredColors = [];
  if (cars && modelName) {
    filteredColors = cars.data.filter((c) => {
      return c.name.toLowerCase() === modelName.toLowerCase();
    });
  }

  const [currentColor, setColor] = useState("");
  const handleColorChange = (e) => {
    setColor(e.target.value);
    setCarColor(e.target.value);
  };

  const [currentRate, setRate] = useState("");
  const handleRateChange = (e) => {
    setRate(e.target.value);
    setCarRate(e.target.value);
  };

  const [isChecked, setCheck] = useState("");
  const handleParamsChange = (e, id) => {
    setCheck(e.target.value);
    setCarParams(parseInt(id));
  };

  const [startDate, setCurStartDate] = useState("");
  const [endDate, setCurEndDate] = useState(startDate);

  const handleStartDate = (date) => {
    setCurStartDate(date);
    setDiffDate("");
  };

  const handleEndDate = (date) => {
    setCurEndDate(date);
    setDiffDate("");
  };

  useEffect(() => {
    if (startDate && endDate) {
      const diff = moment.duration(moment(endDate).diff(moment(startDate)));
      setDiffDate(diff);
    }
  }, [startDate, endDate]);

  return (
    <div className={s.additionalPageWrapepr}>
      <div className={s.additionalPageContainer}>
        <div className={s.additionalParameters}>
          <div className={s.additionalBlock}>
            {filteredColors[0] && filteredColors[0].colors.length === 0 ? (
              <span>Извините, невозможно выбрать цвет</span>
            ) : (
              <>
                <span>Цвет</span>
                <div
                  className={`${s.checkBoxesWrapper} ${s.additionalInputBlock}`}
                >
                  <RadioInput
                    id={10}
                    inputName="Любой"
                    currentInputType={currentColor}
                    handleChange={handleColorChange}
                  />
                  {filteredColors[0]
                    ? filteredColors[0].colors.map((color, index) => {
                        return (
                          <RadioInput
                            key={index}
                            id={index}
                            inputName={color}
                            currentInputType={currentColor}
                            handleChange={handleColorChange}
                          />
                        );
                      })
                    : null}
                </div>
              </>
            )}
          </div>
          <div className={s.additionalBlock}>
            <span>Дата аренды</span>
            <div className={`${s.dataPickWrapper} ${s.additionalInputBlock}`}>
              <div className={s.dataFieldWrapper}>
                <label>С</label>
                <div className={s.dataInputField}>
                  <DatePicker
                    placeholderText="Введите дату и время"
                    locale="ru"
                    clearButtonClassName={baseInput.cleanInputBtn}
                    selected={startDate}
                    minDate={new Date()}
                    onChange={(date) => handleStartDate(date)}
                    showTimeSelect
                    dateFormat="dd.MM.yyyy HH:mm "
                  />
                  <button
                    className={baseInput.cleanInputBtn}
                    onClick={() => handleStartDate("")}
                  >
                    <ReactSVG src={clean_input} />
                  </button>
                </div>
              </div>
              <div className={s.dataFieldWrapper}>
                <label>По</label>
                <div className={s.dataInputField}>
                  <DatePicker
                    placeholderText="Введите дату и время"
                    locale="ru"
                    selected={endDate}
                    minDate={startDate}
                    onChange={(date) => handleEndDate(date)}
                    showTimeSelect
                    dateFormat="dd.MM.yyyy HH:mm "
                  />
                  <button
                    className={baseInput.cleanInputBtn}
                    onClick={() => handleEndDate("")}
                  >
                    <ReactSVG src={clean_input} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={s.additionalBlock}>
            <span className={`${s.additionalInputBlock}`}>Тариф</span>
            <div className={s.rateCheckBoxesWrapper}>
              {rate.data.map((rate) => {
                return (
                  <RadioInput
                    key={rate.rateTypeId.id}
                    id={rate.rateTypeId.id}
                    inputName={rate.rateTypeId.name}
                    currentInputType={currentRate}
                    handleChange={handleRateChange}
                    ratePrice={rate.price}
                    rateUnit={rate.rateTypeId.unit}
                  />
                );
              })}
            </div>
          </div>

          <div className={s.additionalBlock}>
            <span className={`${s.additionalInputBlock}`}>Доп услуги</span>
            <div
              className={`${s.checkBoxesWrapper} ${s.additionalParametersCheckboxes}`}
            >
              {addParams.map((param) => {
                return (
                  <CheckBoxInput
                    key={param.id}
                    id={param.id}
                    inputName={param.name}
                    price={param.price}
                    handleChange={handleParamsChange}
                    currentInputType={isChecked}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <OrderInfoContainer btnName={"Итого"} available={!color || !rate} />
      </div>
    </div>
  );
};

export default Additional;
