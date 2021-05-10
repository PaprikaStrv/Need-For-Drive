import { simbirsoftAPI } from "./../API/api";

const SET_CITIES = "SET_CITIES";
const SET_POINTS = "SET_POINTS";
const SET_AVAILABLE = "SET_AVAILABLE";
const SET_INPUT_CITY_VALUE = "SET_INPUT_CITY_VALUE";
const SET_INPUT_POINT_VALUE = "SET_INPUT_POINT_VALUE";
const SET_CITY_ADRESSES = "SET_CITY_ADRESSES";
const SET_MODELS = "SET_MODELS";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_RATE = "SET_RATE";

let initialState = {
  cities: [],
  points: [],
  isModelAvailable: true,
  currentInputCityValue: "",
  currentInputPointValue: "",
  cityAdresses: [],
  models: [],
  categories: [],
  rate: [],
};

const orderPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        ...action,
        cities: action.data,
      };
    case SET_POINTS:
      return {
        ...state,
        ...action,
        points: action.data,
      };
    case SET_AVAILABLE:
      return {
        ...state,
        ...action,
        isModelAvailable: action.data,
      };
    case SET_INPUT_CITY_VALUE:
      return {
        ...state,
        ...action,
        currentInputCityValue: action.data,
      };
    case SET_INPUT_POINT_VALUE:
      return {
        ...state,
        ...action,
        currentInputPointValue: action.data,
      };
    case SET_CITY_ADRESSES:
      return {
        ...state,
        ...action,
        cityAdresses: action.data,
      };
    case SET_MODELS:
      return {
        ...state,
        ...action,
        models: action.data,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        ...action,
        categories: action.data,
      };
      case SET_RATE:
      return {
        ...state,
        ...action,
        rate: action.data,
      };
    default:
      return state;
  }
};

export const setInputCityValue = (value) => ({
  type: SET_INPUT_CITY_VALUE,
  data: value,
});

export const setInputPointValue = (value) => ({
  type: SET_INPUT_POINT_VALUE,
  data: value,
});

export const setCityAdresses = (adresses) => ({
  type: SET_CITY_ADRESSES,
  data: adresses,
});

export const setCities = (cities) => ({
  type: SET_CITIES,
  data: cities,
});

export const setPoints = (points) => ({
  type: SET_POINTS,
  data: points,
});

export const setModelAvailable = (bool) => ({
  type: SET_AVAILABLE,
  data: bool,
});

export const setCars = (cars) => ({
  type: SET_MODELS,
  data: cars,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  data: categories,
});

export const setRate = (rate) => ({
  type: SET_RATE,
  data: rate,
});

export const getCitiesThunkCreator = () => {
  return async (dispatch) => {
    const response = await simbirsoftAPI.getCities();
    dispatch(setCities(response));
  };
};

export const getPointsThunkCreator = () => {
  return async (dispatch) => {
    const response = await simbirsoftAPI.getPoints();
    dispatch(setPoints(response));
  };
};

export const getCars = () => {
  return async (dispatch) => {
    const response = await simbirsoftAPI.getCars();
    dispatch(setCars(response));
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    const response = await simbirsoftAPI.getCategories();
    dispatch(setCategories(response));
  };
};

export const getRate = () => {
  return async (dispatch) => {
    const response = await simbirsoftAPI.getRate();
    dispatch(setRate(response));
  };
};

export default orderPageReducer;
