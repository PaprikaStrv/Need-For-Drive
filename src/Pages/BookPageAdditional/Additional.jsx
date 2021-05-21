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
  setCarColor,
  setCarRate,
  addParams,
  setCarParams,
  setDiffDate,
  currentModel,
  diffDate,
  modelRate,
  startDateRedux,
  endDateRedux,
  setStartDate,
  setEndDate,
  setCarRateId,
}) => {
  registerLocale("ru", ru);
  moment.locale("ru");
  let filteredColors = [];

  const [currentColor, setColor] = useState(color);
  const handleColorChange = (e) => {
    setColor(e.target.value);
    setCarColor(e.target.value);
  };

  const [currentRate, setRate] = useState(modelRate);
  const handleRateChange = (e, rateName, rateId) => {
    setRate(e.target.value);
    setCarRate(rateName);
    setCarRateId(rateId);
  };

  const [isChecked, setCheck] = useState("");
  const handleParamsChange = (e, id) => {
    setCheck(e.target.value);
    setCarParams(parseInt(id));
  };

  const [startDate, setCurStartDate] = useState(startDateRedux);
  const [endDate, setCurEndDate] = useState(endDateRedux);

  const handleStartDate = (date) => {
    setCurStartDate(date);
    setStartDate(date);
    setDiffDate("");
    setActive(true);
    setCurEndDate("");
  };

  const handleEndDate = (date) => {
    setCurEndDate(date);
    setEndDate(date);
  };

  const handleStartDateCleanBtn = () => {
    setCurStartDate("");
    setCurEndDate("");
    setEndDate("");
    setStartDate("");
    setDiffDate("");
  };

  const handleEndDateCleanBtn = () => {
    setCurEndDate("");
    setEndDate("");
    setDiffDate("");
  };

  useEffect(() => {
    if (startDate && endDate) {
      const diff = moment.duration(moment(endDate).diff(moment(startDate)));
      setDiffDate(diff);
    }
  }, [startDate, endDate]);

  const [isCalenadarActive, setActive] = useState(true);

  useEffect(() => {
    if (startDate || startDate !== "") setActive(false);
  }, [startDate]);

  const filterPassedTime = (time) => {
    const selectedDate = new Date(time);
    return startDate.getTime() < selectedDate.getTime();
  };

  const [isTest, setIsTest] = useState(true);
  useEffect(() => {
    if (modelRate !== "" && color !== "" && diffDate !== "") setIsTest(false);
  }, [color, modelRate, diffDate]);

  return (
    <div className={s.additionalPageWrapepr}>
      <div className={s.additionalPageContainer}>
        <div className={s.additionalParameters}>
          <div className={s.additionalBlock}>
            {currentModel.colors.length === 0 ? (
              <RadioInput
                id={10}
                inputName="Любой"
                currentInputType={currentColor}
                handleChange={handleColorChange}
              />
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
                  {currentModel.colors
                    ? currentModel.colors.map((color, index) => {
                        return (
                          <RadioInput
                            key={index}
                            id={index}
                            value={currentColor || color}
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
                    dateFormat="dd.MM.yyyy HH:mm"
                  />
                  <button
                    className={baseInput.cleanInputBtn}
                    onClick={handleStartDateCleanBtn}
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
                    filterTime={filterPassedTime}
                    disabled={isCalenadarActive}
                    onChange={(date) => handleEndDate(date)}
                    showTimeSelect
                    dateFormat="dd.MM.yyyy HH:mm "
                  />
                  <button
                    className={baseInput.cleanInputBtn}
                    onClick={handleEndDateCleanBtn}
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
              {rate.data.map(({ rateTypeId, id, price }) => {
                return (
                  <RadioInput
                    key={rateTypeId.id}
                    id={rateTypeId.id}
                    value={currentRate || rateTypeId.name}
                    inputName={rateTypeId.name}
                    currentInputType={currentRate}
                    handleChange={(event) => handleRateChange(event, rateTypeId.name, id)}
                    ratePrice={price}
                    rateUnit={rateTypeId.unit}
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
              {addParams.map(({ id, name, price, checked }) => {
                return (
                  <CheckBoxInput
                    key={id}
                    id={id}
                    checked={checked}
                    inputName={name}
                    price={price}
                    handleChange={handleParamsChange}
                    currentInputType={isChecked}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <OrderInfoContainer btnName="Итого" available={isTest} btnLink="OrderResult"/>
      </div>
    </div>
  );
};

export default Additional;
