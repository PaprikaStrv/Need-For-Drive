import React from "react";
import { NavLink } from "react-router-dom";
import s from "./OrderInfo.module.scss";
import { XFormatPrice } from "../../commonScripts/scripts.js";
import { diffDateFormat } from "../../commonScripts/diffDateFormat.js";
import { calcPrice } from "./../../commonScripts/calcPrice";

const OrderInfo = ({
  city,
  address,
  color,
  rate,
  available,
  btnName,
  btnLink,
  addParams,
  diffDate,
  currentModel,
  noLink,
  isConfirmFormActive,
  setConfirmFormActive
}) => {
  return (
    <div className={s.orderInfoWrapper}>
      <span className={s.yourOrderText}>Ваш заказ:</span>
      <ul>
        <li>
          <div className={`${s.liName} ${s.liPointName}`}>Пункт выдачи</div>
          <div className={s.addressDots}></div>
          <div className={s.addressOrderInfo}>
            {city && address && (
              <>
                <span className={s.orderInfoCity}>{city},</span>
                <span>{address}</span>
              </>
            )}
          </div>
        </li>
        {currentModel.name && (
          <li>
            <div className={s.liName}>Модель</div>
            <div></div>
            <div className={`${s.addressOrderInfo} ${s.attrSpan}`}>
              <span>{currentModel.name}</span>
            </div>
          </li>
        )}
        {color && (
          <li>
            <div className={s.liName}>Цвет</div>
            <div></div>
            <div className={`${s.addressOrderInfo} ${s.attrSpan}`}>
              <span>{color[0].toUpperCase() + color.slice(1)}</span>
            </div>
          </li>
        )}
        {diffDate.length !== 0 && (
          <li>
            <div className={s.liName}>Длительность аренды</div>
            <div></div>
            <div className={`${s.addressOrderInfo} ${s.attrSpan}`}>
              <span>{diffDateFormat(diffDate)}</span>
            </div>
          </li>
        )}
        {rate && (
          <li>
            <div className={s.liName}>Тариф</div>
            <div></div>
            <div className={`${s.addressOrderInfo} ${s.attrSpan}`}>
              <span>{rate}</span>
            </div>
          </li>
        )}

        {addParams.map(({ name, id, checked }) => {
          if (checked)
            return (
              <li key={id}>
                <div className={s.liName}>{name}</div>
                <div></div>
                <div className={`${s.addressOrderInfo} ${s.attrSpan}`}>
                  <span>Да</span>
                </div>
              </li>
            );
        })}
      </ul>

      {rate !== "" && diffDate && (
        <div className={s.modelPrice}>
          <span className={s.price}>Цена: </span>
          <span className={s.priceBorder}>
            {calcPrice(rate, diffDate, currentModel.priceMin, addParams)} ₽
          </span>
        </div>
      )}
      {currentModel.priceMin && currentModel.priceMax && (
        <div
          className={
            rate && diffDate
              ? `${s.modelPrice} ${s.modelPriceHide}`
              : s.modelPrice
          }
        >
          <span className={s.price}>Цена: </span>
          <span className={s.priceBorder}>
            от {XFormatPrice(currentModel.priceMin)} до{" "}
            {XFormatPrice(currentModel.priceMax)} ₽
          </span>
        </div>
      )}

      {noLink ? (
        <button className={s.orderInfoBtn} onClick={() => setConfirmFormActive(!isConfirmFormActive)}>Заказать</button>
      ) : (
        <NavLink
          to={"/need-for-drive/bookCar/" + btnLink}
          className={
            available ? `${s.orderInfoBtn} ${s.disabled}` : s.orderInfoBtn
          }
        >
          {btnName}
        </NavLink>
      )}
    </div>
  );
};

export default OrderInfo;
