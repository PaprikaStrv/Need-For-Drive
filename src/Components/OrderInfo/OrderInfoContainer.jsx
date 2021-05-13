import React from "react";
import OrderInfo from "./OrderInfo";
import { connect } from "react-redux";

const OrderInfoContainer = ({
  city,
  address,
  modelName,
  color,
  rate,
  priceMin,
  priceMax,
  available,
  btnName,
  btnLink,
  addParams,
}) => {
  return (
    <OrderInfo
      {...{
        city,
        address,
        modelName,
        color,
        rate,
        priceMin,
        priceMax,
        available,
        btnName,
        btnLink,
        addParams,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  city: state.orderPage.currentInputCityValue,
  address: state.orderPage.currentInputPointValue,
  modelName: state.model.modelName,
  priceMin: state.model.priceMin,
  priceMax: state.model.priceMax,
  color: state.model.color,
  rate: state.model.rate,
  addParams: state.model.additionalParameters
});

export default connect(mapStateToProps)(OrderInfoContainer);
