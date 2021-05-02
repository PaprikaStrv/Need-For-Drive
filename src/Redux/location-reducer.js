import { simbirsoftAPI } from "./../API/api";

const SET_ADDRESS_COORDS = "SET_ADDRESS_COORDS";
const RESET_COORDS = "RESET_COORDS";

let initialState = {
  coords: [],
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRESS_COORDS:
      return {
        ...state,
        ...action,
        coords: [...state.coords, { coords: action.coords }],
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

export default locationReducer;
