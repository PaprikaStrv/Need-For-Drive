import React, { useEffect } from "react";
import PointsMap from "./Map";
import { connect } from "react-redux";
import {
  getCoords,
  getCurPointCoords,
  getAddress,
} from "../../Redux/location-reducer";

import { setInputPointValue } from "./../../Redux/orderPage-reducer";

const PointsMapContainer = ({
  getAddress,
  setInputPointValue,
  getCoords,
  getCurPointCoords,
  cityAdresses,
  curPointAddress,
  curPointCoords,
  pointAddress,
  city,
  coords,
}) => {
  const handlerGetPointCoords = (coords) => {
    getAddress(coords);
  };

  useEffect(() => {
    if (curPointAddress) {
      setInputPointValue(curPointAddress);
    }
  }, [curPointAddress]);

  useEffect(() => {
    if (cityAdresses.length > 0) {
      cityAdresses.forEach((item) => {
        getCoords(item.name, city);
      });
    }
  }, [city]);

  useEffect(() => {
    if (pointAddress && pointAddress !== "") {
      getCurPointCoords(pointAddress, city);
    }
  }, [pointAddress]);

  return <PointsMap {...{
    curPointAddress,
    curPointCoords,
    pointAddress,
    city,
    coords,
  }} handlerGetPointCoords={handlerGetPointCoords} />;
};

const mapStateToProps = (state) => ({
  city: state.orderPage.currentInputCityValue,
  cityAdresses: state.orderPage.cityAdresses,
  coords: state.location.coords,
  pointAddress: state.orderPage.currentInputPointValue,
  curPointCoords: state.location.curAddressCoords,
  curPointAddress: state.location.curPointAddress,
});

export default connect(mapStateToProps, {
  getCoords,
  getCurPointCoords,
  getAddress,
  setInputPointValue,
})(PointsMapContainer);
