import React from "react";
import { ReactSVG } from "react-svg";
import s from "./BoopPage.module.scss";
import nextStep from "../../Images/next_step.svg";
import { NavLink } from "react-router-dom";
import { Form, Field } from "react-final-form";
import Header from './../../Components/Header/Header';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const BookPage = (props) => {
  return (
    <section className={s.bookPageWrapper}>
    <div className={s.bookHeaderWrapper}>
    <Header />
    </div>
      

      <div className={s.orderStepsWrapper}>
        <div className={s.orderStep}>
          <NavLink to="/">
            <span className={s.stepLinks}>Местоположение</span>
          </NavLink>

          <ReactSVG src={nextStep} />
        </div>

        <div className={s.orderStep}>
          <NavLink to="/">
            <span className={s.stepLinks}>Модель</span>
          </NavLink>

          <ReactSVG src={nextStep} />
        </div>

        <div className={s.orderStep}>
          <NavLink to="/">
            <span className={s.stepLinks}>Дополнительно</span>
          </NavLink>

          <ReactSVG src={nextStep} />
        </div>

        <div className={s.orderStep}>
          <NavLink to="/">
            <span className={s.stepLinks}>Итого</span>
          </NavLink>
        </div>
      </div>
      <div className={s.findLocationFormWrapper}>
        <Form
          onSubmit={onSubmit}
          initialValues={{ stooge: "larry", employed: false }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>First Name</label>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label>Last Name</label>
                <Field
                  name="lastName"
                  component="input"
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              <div className="buttons">
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
      </div>
    </section>
  );
};

export default BookPage;
