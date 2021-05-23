import React from "react";
import { connect } from "react-redux";
import BookingStages from "./BookingStages";

const BookingStagesContainer = ({
  isModelAvail,
  currentModel,
  color,
  rate,
  diffDate,
  confirmData,
  orderData
}) => {
  return (
    <BookingStages {...{ isModelAvail, currentModel, color, rate, diffDate,confirmData, orderData }} />
  );
};

const mapStateToProps = (state) => ({
  isModelAvail: state.orderPage.isModelAvailable,
  currentModel: state.model.currentModel,
  color: state.model.color,
  rate: state.model.rate,
  diffDate: state.model.diffDate,
  confirmData: state.confirm.confirmData,
  orderData: state.confirm.orderData,
});

export default connect(mapStateToProps)(BookingStagesContainer);
