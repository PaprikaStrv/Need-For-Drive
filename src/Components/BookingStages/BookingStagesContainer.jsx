import React from "react";
import { connect } from "react-redux";
import BookingStages from './BookingStages';



const BookingStagesContainer = ({isModelAvail, modelName,}) => {
  return <BookingStages {...{isModelAvail, modelName,}} />;
};

const mapStateToProps = (state) => ({
  isModelAvail: state.orderPage.isModelAvailable,
  modelName: state.model.modelName,
});

export default connect(mapStateToProps)(BookingStagesContainer);
