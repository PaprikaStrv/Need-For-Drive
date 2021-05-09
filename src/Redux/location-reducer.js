import { simbirsoftAPI } from "./../API/api";

const SET_ADDRESS_COORDS = "SET_ADDRESS_COORDS";
const SET_CUR_ADDRESS_COORDS = "SET_CUR_ADDRESS_COORDS";
const RESET_COORDS = "RESET_COORDS";

let initialState = {
  coords: [],
  curAddressCoords: [],
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRESS_COORDS:
      return {
        ...state,
        ...action,
        coords: [...state.coords, { coords: action.coords }],
      };
    case SET_CUR_ADDRESS_COORDS:
      return {
        ...state,
        ...action,
        curAddressCoords: action.data,
      };
    case RESET_COORDS:
      return {
        ...state,
        ...action,
        coords: [],
      };
    default:
      return state;
  }
};

export const setCoords = (coords) => ({
  type: SET_ADDRESS_COORDS,
  coords,
});

export const setCurPointCoords = (coords) => ({
  type: SET_CUR_ADDRESS_COORDS,
  data: coords,
});

export const resetCoords = () => ({
  type: RESET_COORDS,
});

export const getCoords = (address, city) => {
  return async (dispatch) => {
    const response = await simbirsoftAPI.addressGeocode(address, city);
    dispatch(
      setCoords(
        response.response.GeoObjectCollection.featureMember[0].GeoObject.Point
          .pos
      )
    );
  };
};

export const getCurPointCoords = (address, city) => {
  return async (dispatch) => {
    const response = await simbirsoftAPI.addressGeocode(address, city);
    dispatch(
      setCurPointCoords(
        response.response.GeoObjectCollection.featureMember[0].GeoObject.Point
          .pos
      )
    );
  };
};

// export const getAddress = (lat, ln) => {
//   return async (dispatch) => {
//     const response = await simbirsoftAPI.coordsGeocode(lat, ln);
//     console.log(response.response.GeoObjectCollection);
//   };
// };

export default locationReducer;
