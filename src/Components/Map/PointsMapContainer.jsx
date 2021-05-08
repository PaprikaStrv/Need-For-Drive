import React, { useEffect } from "react";
import PointsMap from "./Map";
import { connect } from "react-redux";
import { getCoords } from "../../Redux/location-reducer";
import Preloader from "./../Preloader/Preloader";

const PointsMapContainer = (props) => {
  useEffect(() => {
    if (props.cityAdresses.length > 0) {
      for (let i = 0; i < props.cityAdresses.length; i++) {
        props.getCoords(props.cityAdresses[i].name, props.city);
      }
    }
  }, [props.city]);

  return <PointsMap {...props} />;
};

const mapStateToProps = (state) => ({
  city: state.orderPage.currentInputCityValue,
  cityAdresses: state.orderPage.cityAdresses,
  coords: state.location.coords,
});

export default connect(mapStateToProps, { getCoords })(PointsMapContainer);
