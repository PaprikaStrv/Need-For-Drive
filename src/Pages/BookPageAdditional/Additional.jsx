import React, { useState } from "react";
import RadioInput from "../../Components/RaioInput/RadioInput";
import OrderInfoContainer from "./../../Components/OrderInfo/OrderInfoContainer";
import s from "./Additional.module.scss";
import radioStyle from "./../../Components/RaioInput/RadioInput.module.scss";
import baseInput from "../BookPageLocation/BookPageLocation.module.scss";
import { ReactSVG } from "react-svg";
import clean_input from "../../Images/clean_input.svg";

const Additional = (props) => {
  let filteredColors = [];
  if (props.cars && props.modelName) {
    filteredColors = props.cars.data.filter((c) => {
      return c.name.toLowerCase() === props.modelName.toLowerCase();
    });
  }

  const [currentColor, setColor] = useState("");
  const handleColorChange = (e) => {
    setColor(e.target.value);
    props.setCarColor(e.target.value);
  };

  const [currentRate, setRate] = useState("");
  const handleRateChange = (e) => {
    setRate(e.target.value);
  };

  return (
    <div className={s.additionalPageWrapepr}>
      <div className={s.additionalPageContainer}>
        <div className={s.additionalBlock}>
          <span>Цвет</span>
          <div className={`${s.checkBoxesWrapper} ${s.additionalInputBlock}`}>
            {filteredColors[0].colors.map((color, index) => {
              return (
                <div
                  className={`${radioStyle.checkBoxWrapper} ${s.checkBoxWrapper}`}
                >
                  <input
                    type="radio"
                    id={index}
                    className={radioStyle.checkBox}
                    checked={currentColor === color}
                    onChange={handleColorChange}
                    value={color}
                  />
                  <label
                    htmlFor={index}
                    className={
                      currentColor === color ? "" : radioStyle.notActiveLable
                    }
                  >
                    {color}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className={s.additionalBlock}>
          <span>Дата аренды</span>
          <div className={`${s.dataPickWrapper} ${s.additionalInputBlock}`}>
            <div className={s.dataFieldWrapper}>
              <label>С</label>
              <div className={s.dataInputField}>
                <input type="date" />
                <button className={baseInput.cleanInputBtn}>
                  <ReactSVG src={clean_input} />
                </button>
              </div>
            </div>
            <div className={s.dataFieldWrapper}>
              <label>По</label>
              <div className={s.dataInputField}>
                <input type="date" />
                <button className={baseInput.cleanInputBtn}>
                  <ReactSVG src={clean_input} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={s.additionalBlock}>
          <span className={`${s.additionalInputBlock}`}>Тариф</span>
          <div>
            {props.rate.data.map((rate) => {
              return (
                <div>
                  <input
                    type="radio"
                    className={radioStyle.checkBox}
                    id={rate.rateTypeId.id}
                    value={rate.rateTypeId.name}
                    checked={currentRate === rate.rateTypeId.name}
                    onChange={handleRateChange}
                  />
                  <label htmlFor={rate.rateTypeId.id}>
                    {rate.rateTypeId.name}, {rate.price}₽/{rate.rateTypeId.unit}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className={s.additionalBlock}>
          <span className={`${s.additionalInputBlock}`}>Доп услуги</span>
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
      </div>
      <OrderInfoContainer btnName={"Итого"} />
    </div>
  );
};

export default Additional;
