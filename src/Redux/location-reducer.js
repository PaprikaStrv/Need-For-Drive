const SET_CURRENT_LOCATION = "SET_CURRENT_LOCATION";

let initialState = {
  geolocation: "Саранск",
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_CURRENT_LOCATION:
    //   return {
    //     ...state,
    //     ...action,
    //     geolocation: action.data,
    //   };

    default:
      return state;
  }
};

// const setCurrentLocation = (location) => ({
//   type: SET_CURRENT_LOCATION,
//   data: location,
// });

// const getCurrentLocationThunkCreator = () => {
//   return (dispatch) => {
//     navigator.geolocation.getCurrentPosition(position => {
//         console.log(position);
//     })
//   };
// };

export default locationReducer;
