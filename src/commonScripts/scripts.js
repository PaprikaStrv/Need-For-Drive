
// formating price: 30000 -> 30 000
export const XFormatPrice = (_number) => {
  let decimal = 0;
  let separator = " ";
  let decpoint = ".";
  let format_string = "#";

  let r = parseFloat(_number);

  let exp10 = Math.pow(10, decimal); // приводим к правильному множителю
  r = Math.round(r * exp10) / exp10; // округляем до необходимого числа знаков после запятой

  let rr = Number(r).toFixed(decimal).toString().split(".");

  let b = rr[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "$1" + separator);

  r = rr[1] ? b + decpoint + rr[1] : b;
  return format_string.replace("#", r);
};


// makes valid img links (if not base64)
export const prepareImgLink = (imgLink) => {
  if (imgLink.match('base64')) {
    return imgLink
  }
  return `https://api-factory.simbirsoft1.com${imgLink}`
};