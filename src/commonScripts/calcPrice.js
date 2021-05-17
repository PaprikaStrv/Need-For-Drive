import { XFormatPrice } from "./scripts";
import moment from "moment";
import "moment/locale/ru";
import "moment-duration-format";
require("moment-duration-format");

export const calcPrice = (rate, diffDate, priceMin, addParams) => {
  let price = 0;
  let paramsPrice = 0;
  let days = "";
  let weeks = "";
  let minutes = "";
  const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
  const ONE_MINUTE = 1000 * 60;
  addParams.map((param) => {
    if (param.checked) {
      paramsPrice += param.price;
    }
  });
  switch (rate) {
    case "На сутки": {
      if (diffDate._data.hours !== 0 || diffDate._data.minutes !== 0) {
        days = diffDate._data.days + 1;
      } else days = diffDate._data.days;
     
      price = priceMin + (days * 1999) + paramsPrice;
      return XFormatPrice(price);
    }
    case "Недельный Плюс": {
       weeks =  Math.ceil(diffDate._milliseconds / ONE_WEEK);
       price = priceMin + (weeks * 7500) + paramsPrice;
       return XFormatPrice(price);
    }
    case "Поминутно": {
        minutes = diffDate._milliseconds / ONE_MINUTE;
        price = priceMin + (minutes * 7) + paramsPrice;
        return XFormatPrice(price);
    }
  }
};
