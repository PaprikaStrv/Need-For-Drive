import react from "react";
import s from "./ConfirmOrder.module.scss";
import { Form} from "react-final-form";

const ConfirmOrder = ({ setConfirmFormActive, isConfirmFormActive, handleFormSubmit}) => {
  return (
    <div className={s.confirmOrderWrapper}>
      <div className={s.confirmOrderContainer}>
        <Form
          onSubmit={handleFormSubmit}
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
