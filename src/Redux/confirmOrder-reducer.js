import { simbirsoftAPI } from "./../API/api";

let initialState = {};

const ConfirmOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const putOrder = (
  cityId,
  pointId,
  color,
  dateFrom,
  dateTo,
  rateId,
  price,
  isFullTank,
  isNeedChildChair,
  isRigthWheel
) => {
  return async (dispatch) => {
    const response = await simbirsoftAPI.putOrder(
      cityId,
      pointId,
      color,
      dateFrom,
      dateTo,
      rateId,
      price,
      isFullTank,
      isNeedChildChair,
      isRigthWheel
    );
    console.log(response);
  };
};

export default ConfirmOrderReducer;
