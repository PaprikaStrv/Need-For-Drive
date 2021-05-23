import React, { useEffect } from "react";
import BookPage from "./BookPage";
import { connect } from "react-redux";
import { getOrderInfo } from "../../Redux/confirmOrder-reducer";
import queryString from "query-string";
import { useHistory } from "react-router";

const BookPageContainer = ({
  isAvail,
  isConfirmFormActive,
  confirmData,
  getOrderInfo,
}) => {
  return <BookPage {...{ isAvail, isConfirmFormActive }} />;
};

const mapStateToProps = (state) => ({
  isAvail: state.orderPage.isModelAvailable,
  isConfirmFormActive: state.orderPage.isConfirmFormActive,
  confirmData: state.confirm.confirmData,
});

export default connect(mapStateToProps, { getOrderInfo })(BookPageContainer);
