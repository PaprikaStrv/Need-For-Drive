import React from "react";
import { connect } from "react-redux";
import BookingStages from './BookingStages';



const BookingStagesContainer = ({isModelAvail, modelName,color, rate}) => {
  return <BookingStages {...{isModelAvail, modelName, color,rate}} />;
};

const mapStateToProps = (state) => ({
  isModelAvail: state.orderPage.isModelAvailable,
  modelName: state.model.modelName,
  color: state.model.color,
  rate: state.model.rate,
});

export default connect(mapStateToProps)(BookingStagesContainer);
