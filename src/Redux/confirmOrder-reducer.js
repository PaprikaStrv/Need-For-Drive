import { simbirsoftAPI } from "./../API/api";

const SET_CONFIRM_DATA = "SET_CONFIRM_DATA";
const SET_ORDER_DATA = "SET_ORDER_DATA";

let initialState = {
  confirmData: [],
  orderData: [],
};

const ConfirmOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFIRM_DATA:
      return {
        ...state,
        ...action,
        confirmData: action.data,
      };
    case SET_ORDER_DATA:
      return {
        ...state,
        ...action,
        orderData: action.data,
      };
    default:
      return state;
  }
};

export const setConfirmData = (data) => ({
  type: SET_CONFIRM_DATA,
  data,
});

export const setOrderData = (data) => ({
  type: SET_ORDER_DATA,
  data,
});

export const postOrder = (res) => {
  return async (dispatch) => {
    const response = await simbirsoftAPI.postOrder(res);
    dispatch(setConfirmData(response));
    //localStorage.setItem("orderInfo", JSON.stringify(response));
  };
};

export const getOrderInfo = (orderId) => {
  return async (dispatch) => {
    const response = await simbirsoftAPI.getOrder(orderId);
    dispatch(setOrderData(response));
  }
}

export default ConfirmOrderReducer;
