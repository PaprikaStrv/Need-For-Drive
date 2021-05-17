import moment from "moment";
import "moment/locale/ru";
import "moment-duration-format";
require("moment-duration-format");

export const diffDateFormat = (date) => {
  let days = "д";
  let hours = "ч";
  let minutes = "м";

  let countDays = "";
  let countHours = "";
  let countMinutes = "";

  countDays = Math.floor(date.asDays());
  date.subtract(moment.duration(days, "days"));

  countHours = date.hours();
  date.subtract(moment.duration(hours, "hours"));

  countMinutes = date.minutes();
  date.subtract(moment.duration(minutes, "minutes"));

  if (countDays < 1) {
    countDays = "";
    days = "";
  }

  if (countHours === 0) {
    countHours = "";
    hours = "";
  }

  if (countMinutes === 0) {
    countMinutes = "";
    minutes = "";
  }

  let finalDate = `${countDays}${days} ${countHours}${hours} ${countMinutes}${minutes}`;

  return finalDate;
};
