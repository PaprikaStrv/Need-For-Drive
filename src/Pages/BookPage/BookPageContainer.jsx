import React from "react";
import { connect } from "react-redux";
import { setAvailable } from "../../Redux/orderPage-reducer";
import BookPage from "./BookPage";



const BookPageContainer = (props) => {
  return <BookPage {...props} />;
};

const mapStateToProps = (state) => ({
  isAvail: state.orderPage.isAvailable,
});

export default connect(mapStateToProps, { setAvailable })(BookPageContainer);
