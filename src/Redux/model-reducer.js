import { simbirsoftAPI } from "./../API/api";

const SET_MODELS = "SET_MODELS";
const SET_CAR_MODEL_NAME = "SET_CAR_MODEL_NAME";
const SET_CAR_PRICE_MIN = "SET_CAR_PRICE_MIN";
const SET_CAR_PRICE_MAX = "SET_CAR_PRICE_MAX";
const SET_CAR_COLOR = "SET_CAR_COLOR";
const SET_CAR_RATE = "SET_CAT_RATE";
const SET_CAR_PARAMS = "SET_CAR_PARAMS";
const SET_DIFF_DATE = "SET_DIFF_DATE";
const UNSET_CAR_PARAMS = "UNSET_CAR_PARAMS";

let initialState = {
  models: [],
  modelName: "",
  color: "",
  rate: "",
  priceMin: "",
  priceMax: "",
  diffDate: [],
  additionalParameters: [
    { id: 12, name: "Полный бак", price: 500, checked: false },
    { id: 23, name: "Детское кресло", price: 200, checked: false },
    { id: 33, name: "Правый руль", price: 1600, checked: false },
  ],
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
    case SET_CAR_RATE:
      return {
        ...state,
        ...action,
        rate: action.data,
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
    case SET_DIFF_DATE: {
      return {
        ...state,
        ...action,
        diffDate: action.date,
      };
    }
    case SET_CAR_PARAMS: {
      const id = action.id;
      const exist = state.additionalParameters.some((item) => item.id === id);
      if (exist) {
        const additionalParameters = state.additionalParameters.map((item) =>
          item.id === id
            ? {
                ...item,
                checked: !item.checked,
              }
            : item
        );
        return { ...state, additionalParameters };
      } else {
        return {
          ...state,
        };
      }
    }
    case UNSET_CAR_PARAMS:
      return {
        ...state,
        additionalParameters: state.additionalParameters.map((item) => {
          return { ...item, checked: false };
        }),
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
});

export const setCarRate = (rate) => ({
  type: SET_CAR_RATE,
  data: rate,
});

export const setCarModelPriceMin = (priceMin) => ({
  type: SET_CAR_PRICE_MIN,
  data: priceMin,
});

export const setCarModelPriceMax = (priceMax) => ({
  type: SET_CAR_PRICE_MAX,
  data: priceMax,
});

export const setCarParams = (id) => ({
  type: SET_CAR_PARAMS,
  id,
});

export const unsetCarParams = () => ({
  type: UNSET_CAR_PARAMS,
});

export const setDiffDate = (date) => ({
  type: SET_DIFF_DATE,
  date,
});

export const getCars = () => {
  return async (dispatch) => {
    const response = await simbirsoftAPI.getCars();
    dispatch(setCars(response));
  };
};

export default modelReducer;
