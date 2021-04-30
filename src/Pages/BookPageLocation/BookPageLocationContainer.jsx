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
import Preloader from "./../../Components/Preloader/Preloader";
import BookPageLocation from './BookPageLocation';

const BookPageLocationContainer = (props) => {

  useEffect(() => {
    props.getCitiesThunkCreator();
    props.getPointsThunkCreator();
  }, []); //зависимости?!

  if (!props.cities || props.cities.length === 0 || !props.points || props.points.length === 0) {
    return <Preloader />;
  }

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
  isModelAvail: state.orderPage.isAvailable,
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
})(BookPageLocationContainer);
