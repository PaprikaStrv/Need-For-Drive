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
          <div className={`${s.liName} ${s.liPointName}`}>Пункт выдачи</div>
          <div className={s.addressDots}></div>
          <div className={s.addressOrderInfo}>
            {props.city && props.address && (
              <>
                <span className={s.orderInfoCity}>{props.city},</span>
                <span>{props.address}</span>
              </>
            )}
          </div>
        </li>
        {props.modelName && (
          <li>
            <div className={s.liName}>Модель</div>
            <div></div>
            <div className={`${s.addressOrderInfo} ${s.attrSpan}`}>
              {/* <span></span> */}
              <span>{props.modelName}</span>
            </div>
          </li>
        )}
        {props.color && (
          <li>
            <div className={s.liName}>Цвет</div>
            <div></div>
            <div  className={`${s.addressOrderInfo} ${s.attrSpan}`}>
              {/* <span></span> */}
              <span>{props.color[0].toUpperCase() + props.color.slice(1)}</span>
            </div>
          </li>
        )}
        {props.rate && (
          <li>
            <div className={s.liName}>Тариф</div>
            <div></div>
            <div  className={`${s.addressOrderInfo} ${s.attrSpan}`}>
              {/* <span></span> */}
              <span>{props.rate}</span>
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

      <NavLink to={"/need-for-drive/bookCar/" + props.btnLink} className={props.available ? `${s.orderInfoBtn} ${s.disabled}` : s.orderInfoBtn}>
        {/* <button disabled={props.available} className={}>
         
        </button> */}
        {props.btnName}
      </NavLink>
    </div>
  );
};

export default OrderInfo;
