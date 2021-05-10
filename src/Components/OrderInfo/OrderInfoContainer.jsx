import React from "react";
import OrderInfo from "./OrderInfo";
import { connect } from "react-redux";

const OrderInfoContainer = (props) => {
  return <OrderInfo {...props} />;
};

const mapStateToProps = (state) => ({
  city: state.orderPage.currentInputCityValue,
  address: state.orderPage.currentInputPointValue,
  modelName: state.model.modelName,
  priceMin: state.model.priceMin,
  priceMax: state.model.priceMax,
  color: state.model.color,
});

export default connect(mapStateToProps)(OrderInfoContainer);
