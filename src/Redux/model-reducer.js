import { simbirsoftAPI } from "./../API/api";

const SET_MODELS = "SET_MODELS";
const SET_CAR_COLOR = "SET_CAR_COLOR";
const SET_CAR_RATE = "SET_CAT_RATE";
const SET_CAR_RATE_ID = "SET_CAT_RATE_ID";
const SET_CAR_PARAMS = "SET_CAR_PARAMS";
const SET_DIFF_DATE = "SET_DIFF_DATE";
const UNSET_CAR_PARAMS = "UNSET_CAR_PARAMS";
const SET_CURRENT_MODEL = "SET_CURRENT_MODEL";

const SET_START_DATE = "SET_START_DATE";
const SET_END_DATE = "SET_END_DATE";
const SET_RESULT_PRICE = "SET_RESULT_PRICE";

let initialState = {
  models: [],
  currentModel: [],
  color: "",
  rate: "",
  rateId: "",
  startDate: "",
  endDate: "",
  resultPrice: "",
  diffDate: [],
  additionalParameters: [
    {
      id: 12,
      name: "Полный бак",
      resultName: "Топливо",
      resultValue: "100%",
      price: 500,
      checked: false,
    },
    {
      id: 23,
      name: "Детское кресло",
      resultName: "Детское кресло",
      resultValue: "Да",
      price: 200,
      checked: false,
    },
    {
      id: 33,
      name: "Правый руль",
      resultName: "Правый руль",
      resultValue: "Да",
      price: 1600,
      checked: false,
    },
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

    case SET_CAR_COLOR:
      return {
        ...state,
        ...action,
        color: action.data,
      };
    case SET_CAR_RATE:
      return {
        ...state,
        rate: action.rate,
      };
    case SET_CAR_RATE_ID:
      return {
        ...state,
        rateId: action.rateId,
      };
    case SET_CURRENT_MODEL:
      return {
        ...state,
        ...action,
        currentModel: action.model,
      };
    case SET_START_DATE:
      return {
        ...state,
        ...action,
        startDate: action.date,
      };
    case SET_END_DATE:
      return {
        ...state,
        ...action,
        endDate: action.date,
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
    case SET_RESULT_PRICE:
      return {
        ...state,
        ...action,
        resultPrice: action.price,
      };
    default:
      return state;
  }
};

export const setCars = (cars) => ({
  type: SET_MODELS,
  data: cars,
});

export const setCarColor = (color) => ({
  type: SET_CAR_COLOR,
  data: color,
});

export const setCarRate = (rate) => ({
  type: SET_CAR_RATE,
  rate,
});

export const setCarRateId = (rateId) => ({
  type: SET_CAR_RATE_ID,
  rateId,
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

export const setStartDate = (date) => ({
  type: SET_START_DATE,
  date,
});

export const setEndDate = (date) => ({
  type: SET_END_DATE,
  date,
});

export const setCurrentModel = (model) => ({
  type: SET_CURRENT_MODEL,
  model,
});

export const setResultPrice = (price) => ({
  type: SET_RESULT_PRICE,
  price,
});

export const getCars = () => {
  return async (dispatch) => {
    const response = await simbirsoftAPI.getCars();
    dispatch(setCars(response));
  };
};



export default modelReducer;
