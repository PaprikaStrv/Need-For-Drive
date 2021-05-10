import { simbirsoftAPI } from "./../API/api";

const SET_MODELS = "SET_MODELS";
const SET_CAR_MODEL_NAME = "SET_CAR_MODEL_NAME";
const SET_CAR_PRICE_MIN = "SET_CAR_PRICE_MIN";
const SET_CAR_PRICE_MAX = "SET_CAR_PRICE_MAX";
const SET_CAR_COLOR = "SET_CAR_COLOR";

let initialState = {
  models: [],
  modelName: "",
  color: "",
  priceMin: "",
  priceMax: "",
};

const modelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODELS:
      return {
        ...state,
        ...action,
        models: action.data,
      };
    case SET_CAR_MODEL_NAME:
      return {
        ...state,
        ...action,
        modelName: action.data,
      };
      case SET_CAR_COLOR:
      return {
        ...state,
        ...action,
        color: action.data,
      };
    case SET_CAR_PRICE_MIN:
      return {
        ...state,
        ...action,
        priceMin: action.data,
      };
    case SET_CAR_PRICE_MAX:
      return {
        ...state,
        ...action,
        priceMax: action.data,
      };
    default:
      return state;
  }
};

export const setCars = (cars) => ({
  type: SET_MODELS,
  data: cars,
});

export const setCarModelName = (model) => ({
  type: SET_CAR_MODEL_NAME,
  data: model,
});

export const setCarColor = (color) => ({
  type: SET_CAR_COLOR,
  data: color,
})

export const setCarModelPriceMin = (priceMin) => ({
  type: SET_CAR_PRICE_MIN,
  data: priceMin,
});

export const setCarModelPriceMax = (priceMax) => ({
  type: SET_CAR_PRICE_MAX,
  data: priceMax,
});

export const getCars = () => {
  return async (dispatch) => {
    const response = await simbirsoftAPI.getCars();
    dispatch(setCars(response));
  };
};

export default modelReducer;
