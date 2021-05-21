import react, { useState } from "react";
import s from "./ResultOrder.module.scss";
import OrderInfoContainer from "../../Components/OrderInfo/OrderInfoContainer";
import carNameStyle from "../BookPageModel/ModelPage.module.scss";
import moment from "moment";
import "moment/locale/ru";
import "moment-duration-format";
import { prepareImgLink } from "../../commonScripts/scripts";
import ConfirmOrder from "../ConfirmOrder/ConfirmOrder";
import { formatCarNumber } from './../../commonScripts/formatCarNumber';
require("moment-duration-format");

const ResultOrder = ({
  currentModel,
  addParams,
  startDate,
  isConfirmFormActive,
}) => {
  return (
    <div className={s.resultOrderWrapper}>
      <div className={s.resultOrderContainer}>
        <div className={s.resultInfoBLock}>
          <ul>
            <li className={carNameStyle.carModelName}>{currentModel.name}</li>
            {currentModel.number ? (
              <li className={` ${s.carNumber} ${s.text}`}>
                {formatCarNumber(currentModel.number)}
              </li>
            ) : (
              <li className={` ${s.carNumber} ${s.text}`}>
                <span className={`${s.extraText}`}>{formatCarNumber("А111АА111")}</span>
              </li>
            )}
            {addParams.map(({ resultName, resultValue, id, checked }) => {
              if (checked)
                return (
                  <li key={id}>
                    <span className={`${s.liName} ${s.text}`}>
                      {resultName}{" "}
                    </span>
                    <span className={`${s.extraText}`}>{resultValue}</span>
                  </li>
                );
            })}
            <li>
              <span className={`${s.liName} ${s.text}`}>Доступна с</span>{" "}
              <span className={`${s.extraText}`}>
                {moment(startDate).format("DD.MM.YYYY HH.MM")}
              </span>{" "}
            </li>
          </ul>
          <div
            className={s.carImgWrapper}
            style={{
              backgroundImage: `url(${prepareImgLink(
                currentModel.thumbnail.path
              )})`,
            }}
          ></div>
        </div>
        <OrderInfoContainer btnName="Заказать" noLink={true} />
      </div>
    </div>
  );
};

export default ResultOrder;
