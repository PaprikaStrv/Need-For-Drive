import React, { useEffect } from "react";
import { connect } from "react-redux";
import Additional from "./Additional";
import { setCarColor, setCarRate } from "./../../Redux/model-reducer";
import { getRate } from "./../../Redux/orderPage-reducer.js";
import Preloader from "./../../Components/Preloader/Preloader";

const AdditionalContainer = ({
  getRate,
  cars,
  rate,
  modelName,
  setCarColor,
  setCarRate,
}) => {
  useEffect(() => {
    getRate();
  }, []);

  if (!rate || rate.length === 0) {
    return <Preloader />;
  }
  return (
    <Additional
      {...{
        cars,
        rate,
        modelName,
        setCarColor,
        setCarRate,
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
});

export default connect(mapStateToProps, { getRate, setCarColor, setCarRate })(
  AdditionalContainer
);
