import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import Autocomplete from "../../Components/AutoComplete/Autocomplete";
import clean_input from "../../Images/clean_input.svg";
import s from "./BookPageLocation.module.scss";
import PointsMapContainer from "./../../Components/Map/PointsMapContainer";
import OrderInfoContainer from "./../../Components/OrderInfo/OrderInfoContainer";

const BookPageLocation = (props) => {
  const [curCityInputValue, setCurCityValue] = useState(props.inputCityValue);
  const [curPointInputValue, setCurPointValue] = useState(
    props.inputPointValue
  );
  const [
    isInputCityAutoCompleteOpen,
    setInputCityAutoCompleteIsOpen,
  ] = useState(false);
  const [
    isInputPointAutoCompleteOpen,
    setInputPointAutoCompleteIsOpen,
  ] = useState(false);

  // choose cities including chars from input
  const filteredCities = props.cities.data.filter((city) => {
    return city.name.toLowerCase().includes(curCityInputValue.toLowerCase());
  });

  //choose point adress for current chosen city
  let poinstWithoutNullCity;
  let filteredPoints = [];

  for (let i = 0; i < props.points.data.length; i++) {
    if (props.points.data[i].cityId != null) {
      poinstWithoutNullCity = props.points.data[i];
      if (poinstWithoutNullCity.cityId.name === curCityInputValue) {
        filteredPoints.push(props.points.data[i].address);
      }
    }
  }

  const arrKey = "name";
  const points = filteredPoints.map((item) => ({ [arrKey]: item.toString() }));
  props.setCityAdresses(points);

  // show filtered cities and put selected in redux state
  const itemCityAutoСompleteClickHandler = (e) => {
    setCurCityValue(e.target.textContent);
    props.setInputCityValue(e.target.textContent);
    setInputCityAutoCompleteIsOpen(!isInputCityAutoCompleteOpen);
  };

  // show filtered points and put selected in redux state
  const itemPointAutoСompleteClickHandler = (e) => {
    setCurPointValue(e.target.textContent);
    props.setInputPointValue(e.target.textContent);
    setInputPointAutoCompleteIsOpen(!isInputPointAutoCompleteOpen);
  };

  //to show autocomplete component for city input
  const cityInputClickHandler = () => {
    setInputCityAutoCompleteIsOpen(true);
  };

  //to show autocomplete component for city input
  const pointInputClickHandler = () => {
    setInputPointAutoCompleteIsOpen(true);
  };

  // make model step available
  if (
    props.inputCityValue !== "" &&
    curCityInputValue === props.inputCityValue &&
    props.inputPointValue !== "" &&
    curPointInputValue === props.inputPointValue
  )
    props.setModelAvailable(false);

  // clean_city_input_on_btn_click
  const cityBtnClickHandler = () => {
    props.setModelAvailable(true);
    props.resetCoords();
    setCurCityValue("");
  };
  // clean_point_input_on_btn_click
  const pointBtnClickHandler = () => {
    props.setModelAvailable(true);
    props.resetCoords();
    setCurPointValue("");
  };

  return (
    <div className={s.findLocationFormWrapper}>
      <div className={s.locationContainer}>
        <div className={s.findLocationFormContainer}>
          <div className={s.formContainer}>
            <div className={s.fieldWrapper}>
              <label>Город</label>
              <div className={s.inputField}>
                <input
                  type="text"
                  name="city"
                  value={curCityInputValue}
                  placeholder="Начните вводить город"
                  autoComplete="off"
                  onChange={(event) => setCurCityValue(event.target.value)}
                  onClick={cityInputClickHandler}
                />
                <button
                  onClick={cityBtnClickHandler}
                  className={s.cleanInputBtn}
                >
                  <ReactSVG src={clean_input} />
                </button>
              </div>
            </div>

            <Autocomplete
              filteredValues={filteredCities}
              itemClickHandler={itemCityAutoСompleteClickHandler}
              value={curCityInputValue}
              isOpen={isInputCityAutoCompleteOpen}
            />
          </div>
          <div className={s.formContainer}>
            <div className={s.fieldWrapper}>
              <label>Пункт выдачи</label>
              <div className={s.inputField}>
                <input
                  type="text"
                  name="point"
                  value={curPointInputValue}
                  placeholder="Начните вводить пункт..."
                  autoComplete="off"
                  onChange={(event) => setCurPointValue(event.target.value)}
                  onClick={pointInputClickHandler}
                />
                <button
                  onClick={pointBtnClickHandler}
                  className={s.cleanInputBtn}
                >
                  <ReactSVG src={clean_input} />
                </button>
              </div>
            </div>
            <Autocomplete
              filteredValues={points}
              itemClickHandler={itemPointAutoСompleteClickHandler}
              value={curPointInputValue}
              isOpen={isInputPointAutoCompleteOpen}
            />
          </div>
          <div className={s.mapContainer}>
            <label>Выбрать на карте:</label>
            <PointsMapContainer />
          </div>
        </div>

        <OrderInfoContainer btnName={"Выбрать модель"} />
      </div>
    </div>
  );
};

export default BookPageLocation;
