import { simbirsoftAPI } from "./../API/api";

const SET_CITIES = "SET_CITIES";
const SET_POINTS = "SET_POINTS";
const SET_AVAILABLE = "SET_AVAILABLE";
const SET_INPUT_CITY_VALUE = "SET_INPUT_CITY_VALUE";
const SET_INPUT_POINT_VALUE = "SET_INPUT_POINT_VALUE";

let initialState = {
  cities: [],
  points: [],
  isAvailable: true,
  currentInputCityValue: "",
  currentInputPointValue: "",
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
        isAvailable: action.data
      }
      case SET_INPUT_CITY_VALUE:
        return {
          ...state,
          ...action,
          currentInputCityValue: action.data
        }
        case SET_INPUT_POINT_VALUE:
        return {
          ...state,
          ...action,
          currentInputPointValue: action.data
        }
    default:
      return state;
  }
};

export const setInputCityValue = (value) => ({
  type: SET_INPUT_CITY_VALUE,
  data: value,
})

export const setInputPointValue = (value) => ({
  type: SET_INPUT_POINT_VALUE,
  data: value,
})



export const setCities = (cities) => ({
  type: SET_CITIES,
  data: cities,
});

export const setPoints = (points) => ({
  type: SET_POINTS,
  data: points,
});

export const setAvailable = (bool) => ({
  type:  SET_AVAILABLE,
  data: bool 
})

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

export default orderPageReducer;
