import react from "react";
import s from "./ConfirmOrder.module.scss";
import { Form, Field } from "react-final-form";

const onSubmit = (values) => {
  console.log(1);
};

const ConfirmOrder = ({ setConfirmFormActive, isConfirmFormActive, }) => {
  // handlerSumbitForm();
  return (
    <div className={s.confirmOrderWrapper}>
      <div className={s.confirmOrderContainer}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div className={s.formWrapper}>
                <div className={s.confirmOrderText}>Подтвердить заказ</div>
                <div className={s.formBtnWrapper}>
                  <button className={s.formConfirmBtn} type="submit">Подтвердить</button>
                  <button  className={`${s.formConfirmBtn} ${s.redColor}`}
                    type="button"
                    onClick={() => setConfirmFormActive(!isConfirmFormActive)}
                  >
                    Вернуться
                  </button>
                </div>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default ConfirmOrder;
