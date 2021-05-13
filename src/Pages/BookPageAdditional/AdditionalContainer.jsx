import React, { useEffect } from "react";
import { connect } from "react-redux";
import Additional from "./Additional";
import { setCarColor, setCarRate, setCarParams } from "./../../Redux/model-reducer";
import { getRate } from "./../../Redux/orderPage-reducer.js";
import Preloader from "./../../Components/Preloader/Preloader";

const AdditionalContainer = ({
  getRate,
  cars,
  rate,
  color,
  modelName,
  setCarColor,
  setCarRate,
  addParams,
  setCarParams,
}) => {
  useEffect(() => {
    getRate();
  }, []);

  if (!rate || rate.length === 0 || !addParams || addParams.length === 0) {
    return <Preloader />;
  }
  return (
    <Additional
      {...{
        cars,
        rate,
        color,
        modelName,
        setCarColor,
        setCarRate,
        addParams,
        setCarParams,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  cars: state.model.models,
  modelName: state.model.modelName,
  color: state.model.color,
  rate: state.orderPage.rate,
  carRate: state.model.rate,
  addParams: state.model.additionalParameters
});

export default connect(mapStateToProps, { getRate, setCarColor, setCarRate, setCarParams })(
  AdditionalContainer
);
