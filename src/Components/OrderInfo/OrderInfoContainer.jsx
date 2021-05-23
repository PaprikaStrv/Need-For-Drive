import React, { useEffect } from "react";
import OrderInfo from "./OrderInfo";
import { connect } from "react-redux";
import { setConfirmFormActive } from "../../Redux/orderPage-reducer";
import { setResultPrice } from "../../Redux/model-reducer";
import { calcPrice } from "./../../commonScripts/calcPrice";

const OrderInfoContainer = ({
  city,
  address,
  color,
  rate,
  available,
  btnName,
  btnLink,
  noLink,
  addParams,
  diffDate,
  currentModel,
  isConfirmFormActive,
  setConfirmFormActive,
  setResultPrice,
  confirmData,
  orderData,
}) => {
  useEffect(() => {
    if (rate && diffDate && currentModel.priceMin && addParams)
      setResultPrice(
        calcPrice(rate, diffDate, currentModel.priceMin, addParams)
      );
  }, [rate, diffDate, addParams]);
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
        noLink,
        addParams,
        diffDate,
        currentModel,
        isConfirmFormActive,
        setConfirmFormActive,
        confirmData,
        orderData,
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
  currentModel: state.model.currentModel,
  isConfirmFormActive: state.orderPage.isConfirmFormActive,
  confirmData: state.confirm.confirmData,
  orderData: state.confirm.orderData,
});

export default connect(mapStateToProps, {
  setConfirmFormActive,
  setResultPrice,
})(OrderInfoContainer);
