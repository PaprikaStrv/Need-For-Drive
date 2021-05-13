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
import { resetCoords } from "../../Redux/location-reducer";
import {
  setCarModelName,
  setCarModelPriceMax,
  setCarModelPriceMin,
} from "../../Redux/model-reducer.js";
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
  setCarModelName,
  setInputPointValue,
  setCarModelPriceMax,
  setCarModelPriceMin,
}) => {
  useEffect(() => {
    getCitiesThunkCreator();
    getPointsThunkCreator();
  }, []); //зависимости?!

  useEffect(() => {}, [inputPointValue]);

  if (!cities || cities.length === 0 || !points || points.length === 0) {
    return <Preloader />;
  }
  // if (!props?.cities?.ponts || props?.cities.length?.points.length === 0 ) {
  //   return <Preloader />;
  // }

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
          setCarModelName,
          setCarModelPriceMax,
          setCarModelPriceMin,
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
});

export default connect(mapStateToProps, {
  getCitiesThunkCreator,
  getPointsThunkCreator,
  setModelAvailable,
  setInputCityValue,
  setInputPointValue,
  setCityAdresses,
  setCarModelPriceMax,
  setCarModelPriceMin,
  resetCoords,
  setCarModelName,
})(BookPageLocationContainer);
