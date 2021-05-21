import React from "react";
import s from "./BookPage.module.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./../../Components/Header/Header";
import BookPageLocationContainer from "../BookPageLocation/BookPageLocationContainer";
import BookingStagesContainer from "./../../Components/BookingStages/BookingStagesContainer";
import BookPageModelContainer from "./../BookPageModel/ModelContainer";
import AdditionalContainer from "./../BookPageAdditional/AdditionalContainer";
import ResultOrderContainer from "../BookPageResult/ResultOrderContainer";
import ConfirmOrderContainer from "../ConfirmOrder/ConfirmOrderContainer";

const BookPage = ({ isAvail, isConfirmFormActive }) => {
  return (
    <section className={s.bookPageWrapper}>
    {isConfirmFormActive && <ConfirmOrderContainer />}
      <div className={s.bookHeaderWrapper}>
        <div className={s.bookHeadContainer}>
          <Header />
        </div>
      </div>

      <BookingStagesContainer />

      <Switch>
        <Route
          exact
          path="/need-for-drive/bookCar"
          component={BookPageLocationContainer}
        />
        {!isAvail && (
          <Route
            path="/need-for-drive/bookCar/Model"
            component={BookPageModelContainer}
          />
        )}

        {!isAvail && (
          <Route
            path="/need-for-drive/bookCar/Additionally"
            component={AdditionalContainer}
          />
        )}

        {!isAvail && (
          <Route
            path="/need-for-drive/bookCar/OrderResult"
            render={() => <ResultOrderContainer />}
          />
        )}
      </Switch>
    </section>
  );
};

export default BookPage;
