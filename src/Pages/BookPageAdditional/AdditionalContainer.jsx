import React, { useEffect } from "react";
import { connect } from "react-redux";
import Additional from "./Additional";
import { setCarColor } from "./../../Redux/model-reducer";
import { getRate } from "./../../Redux/orderPage-reducer.js";
import Preloader from './../../Components/Preloader/Preloader';

const AdditionalContainer = (props) => {
  useEffect(() => {
      props.getRate();
  }, []);

  if(!props.rate || props.rate.length === 0) {
      return <Preloader/>
  }
  return <Additional {...props} />;
};

const mapStateToProps = (state) => ({
  cars: state.model.models,
  modelName: state.model.modelName,
  color: state.model.color,
  rate: state.orderPage.rate,
});

export default connect(mapStateToProps, { getRate, setCarColor })(AdditionalContainer);
