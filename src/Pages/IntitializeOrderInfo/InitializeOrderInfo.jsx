import react, { useState } from "react";
import s from "./InitializeOrder.module.scss";
import OrderInfoContainer from "../../Components/OrderInfo/OrderInfoContainer";
import carNameStyle from "../BookPageModel/ModelPage.module.scss";
import moment from "moment";
import "moment/locale/ru";
import "moment-duration-format";
import { prepareImgLink } from "../../commonScripts/scripts";
import ConfirmOrder from "../ConfirmOrder/ConfirmOrder";
import { formatCarNumber } from "../../commonScripts/formatCarNumber";
require("moment-duration-format");

const InitializeOrderInfo = ({
  currentModel,
  addParams,
  startDate,
  isConfirmFormActive,
  confirmData,
  orderData,
}) => {
  return (
    <div className={s.resultOrderWrapper}>
      <div className={s.resultOrderContainer}>
        <div className={s.resultInfoBLock}>
          <ul>
            {orderData && orderData.length !== 0 && (
              <div className={s.confirmOrderText}>Ваш заказ подтверждён</div>
            )}
            <li className={carNameStyle.carModelName}>
              {orderData.data.carId.name}
            </li>
            {orderData.data.carId.number ? (
              <li className={` ${s.carNumber} ${s.text}`}>
                {formatCarNumber(orderData.data.carId.number)}
              </li>
            ) : (
              <li className={` ${s.carNumber} ${s.text}`}>
                <span className={`${s.extraText}`}>
                  {formatCarNumber("А111АА111")}
                </span>
              </li>
            )}
            {orderData.data.isFullTank && (
              <li>
                {" "}
                <span className={`${s.liName} ${s.text}`}>Топливо</span>
                <span className={`${s.extraText}`}> 100%</span>
              </li>
            )}
            {orderData.data.isNeedChildChair && (
              <li>
                {" "}
                <span className={`${s.liName} ${s.text}`}>Детское кресло</span>
                <span className={`${s.extraText}`}> Да</span>
              </li>
            )}
            {orderData.data.isRightWheel && (
              <li>
                {" "}
                <span className={`${s.liName} ${s.text}`}>Правый руль</span>
                <span className={`${s.extraText}`}> Да</span>
              </li>
            )}
            <li>
              <span className={`${s.liName} ${s.text}`}>Доступна с</span>{" "}
              <span className={`${s.extraText}`}>
                {moment(orderData.data.dateFrom).format("DD.MM.YYYY HH.MM")}
              </span>{" "}
            </li>
          </ul>
          <div
            className={s.carImgWrapper}
            style={{
              backgroundImage: `url(${prepareImgLink(
                orderData.data.carId.thumbnail.path
              )})`,
            }}
          ></div>
        </div>
        <OrderInfoContainer btnName="Заказать" noLink={true}/>
      </div>
    </div>
  );
};

export default InitializeOrderInfo;
