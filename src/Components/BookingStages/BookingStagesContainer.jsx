import React from "react";
import { connect } from "react-redux";
import BookingStages from './BookingStages';



const BookingStagesContainer = (props) => {
  return <BookingStages {...props} />;
};

const mapStateToProps = (state) => ({
  isModelAvail: state.orderPage.isModelAvailable,
  modelName: state.model.modelName,
});

export default connect(mapStateToProps)(BookingStagesContainer);
