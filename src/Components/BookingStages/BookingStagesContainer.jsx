import React from "react";
import { connect } from "react-redux";
import { setAvailable } from "../../Redux/orderPage-reducer";
import BookingStages from './BookingStages';



const BookingStagesContainer = (props) => {
  return <BookingStages {...props} />;
};

const mapStateToProps = (state) => ({
  isAvail: state.orderPage.isAvailable,
});

export default connect(mapStateToProps, { setAvailable })(BookingStagesContainer);
