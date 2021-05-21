import React from "react";
import ConfirmOrder from "./ConfirmOrder";
import { connect } from "react-redux";
import { setConfirmFormActive } from "./../../Redux/orderPage-reducer";

const ConfirmOrderContainer = ({
  city,
  address,
  color,
  rate,
  addParams,
  startDate,
  endDate,
  currentModel,
  isConfirmFormActive,
  setConfirmFormActive,
  rateId,
  resultPrice,
}) => {
  // cityId,
  //   pointId,
  //   color,
  //   dateFrom,
  //   dateTo,
  //   rateId,
  //   price,
  //   isFullTank,
  //   isNeedChildChair,
  //   isRigthWheel;

  const isFullTank = addParams[0].checked;
  const isNeedChildChair = addParams[1].checked;
  const isRigthWheel = addParams[2].checked;

  // const handlerSumbitForm = (
  //   city,
  //   address,
  //   color,
  //   startDate,
  //   endDate,
  //   rate,
  //   resultPrice,
  //   isFullTank,
  //   isNeedChildChair,
  //   isRigthWheel
  // ) => {
    const res = {
      cityId: city,
      pointId: address,
      color: color,
      dateFrom:   startDate,
      dateTo: endDate,
      rateId: rate,
      price: resultPrice,
      isFullTank: isFullTank,
      isNeedChildChair: isNeedChildChair,
      isRigthWheel: isRigthWheel,
    }
    console.log(
      res
    );
  //};

  return (
    <ConfirmOrder
      {...{
        isConfirmFormActive,
        setConfirmFormActive,
        city,
        address,
        color,
        rate,
        addParams,
        startDate,
        endDate,
        currentModel,
        //handlerSumbitForm,
        isFullTank,
        isNeedChildChair,
        isRigthWheel,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  city: state.orderPage.currentInputCityValue,
  address: state.orderPage.currentInputPointValue,
  color: state.model.color,
  rate: state.model.rate,
  rateId: state.model.rateId,
  addParams: state.model.additionalParameters,
  startDate: state.model.startDate,
  endDate: state.model.endDate,
  currentModel: state.model.currentModel,
  isConfirmFormActive: state.orderPage.isConfirmFormActive,
  resultPrice: state.model.resultPrice,
});

export default connect(mapStateToProps, { setConfirmFormActive })(
  ConfirmOrderContainer
);
