import { simbirsoftAPI } from "./../API/api";
const SET_ADDRESS_COORDS = "SET_ADDRESS_COORDS";

let initialState = {
  coords: [],
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRESS_COORDS:
      return {
        ...state,
        ...action,
        coords: action.coords,
      };
    default:
      return state;
  }
};

export const setCoords = (coords) => ({
  type: SET_ADDRESS_COORDS,
  coords,
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
