import React from "react";
import { connect } from "react-redux";
import BookingStages from "./BookingStages";

const BookingStagesContainer = ({
  isModelAvail,
  currentModel,
  color,
  rate,
  diffDate,
}) => {
  return (
    <BookingStages {...{ isModelAvail, currentModel, color, rate, diffDate }} />
  );
};

const mapStateToProps = (state) => ({
  isModelAvail: state.orderPage.isModelAvailable,
  currentModel: state.model.currentModel,
  color: state.model.color,
  rate: state.model.rate,
  diffDate: state.model.diffDate,
});

export default connect(mapStateToProps)(BookingStagesContainer);
