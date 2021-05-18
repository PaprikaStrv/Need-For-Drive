import React from "react";
import OrderInfo from "./OrderInfo";
import { connect } from "react-redux";

const OrderInfoContainer = ({
  city,
  address,
  color,
  rate,
  available,
  btnName,
  btnLink,
  addParams,
  diffDate,
  currentModel,
}) => {
  return (
    <OrderInfo
      {...{
        city,
        address,
        color,
        rate,
        available,
        btnName,
        btnLink,
        addParams,
        diffDate,
        currentModel,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  city: state.orderPage.currentInputCityValue,
  address: state.orderPage.currentInputPointValue,
  color: state.model.color,
  rate: state.model.rate,
  addParams: state.model.additionalParameters,
  diffDate: state.model.diffDate,
  currentModel: state.model.currentModel
});

export default connect(mapStateToProps)(OrderInfoContainer);
