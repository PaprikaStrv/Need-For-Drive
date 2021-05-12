import React, { useEffect} from "react";
import { connect } from "react-redux";
import {
  getCitiesThunkCreator,
  getPointsThunkCreator,
  setModelAvailable,
  setInputCityValue,
  setInputPointValue,
  setCityAdresses,
} from "../../Redux/orderPage-reducer";
import {  resetCoords } from "../../Redux/location-reducer";
import { setCarModelName,setCarModelPriceMax, setCarModelPriceMin  } from "../../Redux/model-reducer.js";
import Preloader from "./../../Components/Preloader/Preloader";
import BookPageLocation from './BookPageLocation';

const BookPageLocationContainer = (props) => {

  useEffect(() => {
    props.getCitiesThunkCreator();
    props.getPointsThunkCreator();
  }, []); //зависимости?!

  useEffect(() => {
  }, [props.inputPointValue])

  if (!props.cities || props.cities.length === 0 || !props.points || props.points.length === 0) {
    return <Preloader />;
  }
  // if (!props?.cities?.ponts || props?.cities.length?.points.length === 0 ) {
  //   return <Preloader />;
  // }


  return (
    <>
      <BookPageLocation {...props}/>
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
