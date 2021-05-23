import React, { useEffect } from "react";
import { Redirect } from "react-router";
import ConfirmOrder from "./ConfirmOrder";
import { connect } from "react-redux";
import { setConfirmFormActive } from "./../../Redux/orderPage-reducer";
import queryString from "query-string";
import { getOrderInfo, postOrder } from "./../../Redux/confirmOrder-reducer";
import "moment/locale/ru";
import "moment-duration-format";
import moment from "moment";
import { Route } from "react-router";
import { useHistory } from "react-router";
import ResultOrderContainer from "../BookPageResult/ResultOrderContainer";
import Preloader from "../../Components/Preloader/Preloader";
require("moment-duration-format");

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
  postOrder,
  points,
  cities,
  confirmData,
  getOrderInfo,
}) => {
  let pointId = "";
  let cityId = "";

  points.data.filter((point) => {
    if (
      address[0].name.replace(/[\s.,%]/g, "") ===
      point.address.replace(/[\s.,%]/g, "")
    ) {
      return (pointId = point.id);
    }
  });

  cities.data.filter((cities) => {
    if (city === cities.name) {
      return (cityId = cities.id);
    }
  });

  let history = useHistory();

  const isFullTank = addParams[0].checked;
  const isNeedChildChair = addParams[1].checked;
  const isRigthWheel = addParams[2].checked;

  const res = {
    orderStatusId: {
      name: "new",
      id: "5e26a191099b810b946c5d89",
    },
    cityId: cityId.toString(),
    pointId: pointId.toString(),
    carId: currentModel.id.toString(),
    color: color.toString(),
    dateFrom: moment.duration(startDate)._milliseconds,
    dateTo: moment.duration(endDate)._milliseconds,
    rateId: rateId.toString(),
    price: parseFloat(resultPrice.replace(/\s/g, "")),
    isFullTank: Boolean(isFullTank),
    isNeedChildChair: Boolean(isNeedChildChair),
    isRightWheel: Boolean(isRigthWheel),
  };

  const handleFormSubmit = () => {
    postOrder(res);
    setConfirmFormActive(!isConfirmFormActive);
  };

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
        isFullTank,
        isNeedChildChair,
        isRigthWheel,
        handleFormSubmit,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  city: state.orderPage.currentInputCityValue,
  address: state.orderPage.cityAdresses,
  color: state.model.color,
  rate: state.model.rate,
  rateId: state.model.rateId,
  addParams: state.model.additionalParameters,
  startDate: state.model.startDate,
  endDate: state.model.endDate,
  currentModel: state.model.currentModel,
  isConfirmFormActive: state.orderPage.isConfirmFormActive,
  resultPrice: state.model.resultPrice,
  points: state.orderPage.points,
  cities: state.orderPage.cities,
  confirmData: state.confirm.confirmData,
});

export default connect(mapStateToProps, {
  getOrderInfo,
  setConfirmFormActive,
  postOrder,
})(ConfirmOrderContainer);
