import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import s from "./BookPage.module.scss";
import { NavLink, Route, Switch } from "react-router-dom";
import { Form, Field } from "react-final-form";
import Header from "./../../Components/Header/Header";
import BookPageLocationContainer from "../BookPageLocation/BookPageLocationContainer";
import BookingStagesContainer from "./../../Components/BookingStages/BookingStagesContainer";
import BookPageModel from "./../BookPageModel/Model";

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
