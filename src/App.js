import "./App.css";
import StartScreen from "./Pages/StartSreen/StartScreen";
import { simbirsoftAPI } from './API/api';
import getAddressCoordsThunkCreator from "./Redux/location-reducer";


// async function a ()  {
//    const response = await simbirsoftAPI.addressGeocode();
//    console.log(response.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos);
// }
   
// a();


  

const App = (props) => {
  return (
    <div className="App">
      <StartScreen />
    </div>
  );
};

export default App;
