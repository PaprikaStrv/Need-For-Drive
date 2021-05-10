import React from "react";
import { NavLink } from "react-router-dom";
import s from "./OrderInfo.module.scss";
import  { XFormatPrice } from '../../commonScripts/scripts.js';

const OrderInfo = (props) => {
  return (
    <div className={s.orderInfoWrapper}>
      <span className={s.yourOrderText}>Ваш заказ:</span>
      <ul>
        <li>
          <div className={s.liName}>Пункт выдачи</div>
          <div></div>
          <div className={s.addressOrderInfo}>
            {props.city && props.address && (
              <>
                <span>{props.city}</span>
                <span>{props.address}</span>
              </>
            )}
          </div>
        </li>
        {props.modelName && (
          <li>
            <div className={s.liName}>Модель</div>
            <div></div>
            <div className={s.addressOrderInfo}>
              <span></span>
              <span>{props.modelName}</span>
            </div>
          </li>
        )}
        {props.color && (
          <li>
            <div className={s.liName}>Цвет</div>
            <div></div>
            <div className={s.addressOrderInfo}>
              <span></span>
              <span>{props.color}</span>
            </div>
          </li>
        )}
      </ul>
      
      {props.priceMin && props.priceMax && (
        <div className={s.modelPrice}>
          <span className={s.price}>Цена: </span>
          <span className={s.priceBorder}>от {XFormatPrice(props.priceMin)} до {XFormatPrice(props.priceMax)} ₽</span>
        </div>
      )}

      <NavLink to={"/need-for-drive/bookCar/" + props.btnLink}>
        <button disabled={props.available} className={s.orderInfoBtn}>
          {props.btnName}
        </button>
      </NavLink>
    </div>
  );
};

export default OrderInfo;
