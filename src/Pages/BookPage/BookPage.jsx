import React from "react";
import s from "./BookPage.module.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./../../Components/Header/Header";
import BookPageLocationContainer from "../BookPageLocation/BookPageLocationContainer";
import BookingStagesContainer from "./../../Components/BookingStages/BookingStagesContainer";
import BookPageModel from "./../BookPageModel/Model";
import OrderInfoContainer from './../../Components/OrderInfo/OrderInfoContainer';

const BookPage = (props) => {
  return (
    <section className={s.bookPageWrapper}>
      <div className={s.bookHeaderWrapper}>
        <Header />
      </div>

      <BookingStagesContainer />

      <Switch>
        <Route
          exact
          path="/need-for-drive/bookCar"
          component={BookPageLocationContainer}
        />

        <Route path="/need-for-drive/bookCar/Model" component={BookPageModel} />
      </Switch>


     
    </section>
  );
};

export default BookPage;
