import React, { useEffect, useState } from "react";
import PointsMap from "./Map";
import { connect } from "react-redux";
import {
  getCoords,
  getCurPointCoords,
} from "../../Redux/location-reducer";
import Preloader from "./../Preloader/Preloader";
import { simbirsoftAPI } from "./../../API/api";
import { compose } from "redux";

const PointsMapContainer = (props) => {
  const handlerGetPointCoords = (coords) => {
  };


  useEffect(() => {
    if (props.cityAdresses.length > 0) {
      for (let i = 0; i < props.cityAdresses.length; i++) {
        props.getCoords(props.cityAdresses[i].name, props.city);
      }
    }
  }, [props.city]);

  useEffect(() => {
    if (props.pointAddress && props.pointAddress !== "") {
      props.getCurPointCoords(props.pointAddress, props.city);
    }
  }, [props.pointAddress]);

  return <PointsMap {...props} handlerGetPointCoords={handlerGetPointCoords} />;
};

const mapStateToProps = (state) => ({
  city: state.orderPage.currentInputCityValue,
  cityAdresses: state.orderPage.cityAdresses,
  coords: state.location.coords,
  pointAddress: state.orderPage.currentInputPointValue,
  curPointCoords: state.location.curAddressCoords,
});

export default connect(mapStateToProps, {
  getCoords,
  getCurPointCoords,
})(PointsMapContainer);
