import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getCitiesThunkCreator,
  getPointsThunkCreator,
  setModelAvailable,
  setInputCityValue,
  setInputPointValue,
  setCityAdresses,
} from "../../Redux/orderPage-reducer";
import { resetCoords, setCurPointCoords } from "../../Redux/location-reducer";
import {
  setCarColor,
  setDiffDate,
  setCarRate,
  unsetCarParams,
  setCurrentModel,
  setStartDate,
  setEndDate,
} from "../../Redux/model-reducer.js";
import { setCurPointAddress } from "../../Redux/location-reducer";
import Preloader from "./../../Components/Preloader/Preloader";
import BookPageLocation from "./BookPageLocation";

const BookPageLocationContainer = ({
  getCitiesThunkCreator,
  getPointsThunkCreator,
  cities,
  points,
  isModelAvail,
  inputCityValue,
  inputPointValue,
  setCityAdresses,
  setInputCityValue,
  setModelAvailable,
  resetCoords,
  setInputPointValue,
  setCurPointAddress,
  setCurPointCoords,
  setCarColor,
  setDiffDate,
  setCarRate,
  unsetCarParams,
  setCurrentModel,
  setStartDate,
  setEndDate,
}) => {
  useEffect(() => {
    getCitiesThunkCreator();
    getPointsThunkCreator();
  }, []); //зависимости?!

  useEffect(() => {}, [inputPointValue]);

  if (!cities || cities.length === 0 || !points || points.length === 0) {
    return <Preloader />;
  }
  return (
    <>
      <BookPageLocation
        {...{
          cities,
          points,
          isModelAvail,
          inputCityValue,
          inputPointValue,
          setCityAdresses,
          setInputPointValue,
          setInputCityValue,
          setModelAvailable,
          resetCoords,
          setCurPointAddress,
          setCurPointCoords,
          setCarColor,
          setDiffDate,
          setCarRate,
          unsetCarParams,
          setCurrentModel,
          setStartDate,
          setEndDate,
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  cities: state.orderPage.cities,
  points: state.orderPage.points,
  location: state.location.geolocation,
  isModelAvail: state.orderPage.isModelAvailable,
  inputCityValue: state.orderPage.currentInputCityValue,
  inputPointValue: state.orderPage.currentInputPointValue,
  curPointAddress: state.location.curPointAddress,
});

export default connect(mapStateToProps, {
  getCitiesThunkCreator,
  getPointsThunkCreator,
  setModelAvailable,
  setInputCityValue,
  setInputPointValue,
  setCityAdresses,
  resetCoords,
  setCurPointAddress,
  setCurPointCoords,
  setCarColor,
  setDiffDate,
  setCarRate,
  unsetCarParams,
  setCurrentModel,
  setStartDate,
  setEndDate,
})(BookPageLocationContainer);
