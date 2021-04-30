import React, { useRef, useState } from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import s from "./Map.module.scss";
import map_marker from "../../Images/map_marker.svg";

const PointsMap = (props) => {
 let coords = [];

 // if(props.coords.length === 0) {
   // coords = [99.505405, 61.698653];
  //} else {
    coords = props.coords.split(" ");
    coords.map(s => parseFloat(s));
 // }
  

  return (
    <div className={s.mapWrapper}>
      <YMaps>
        <Map
          defaultState={{
            center: [coords[1], coords[0]],
            zoom: 5,
          }}
           width="100%"
        >
        
          <Placemark
            key={0}
            geometry={[coords[1], coords[0]]}
            options={{
              iconLayout: "default#image",
              iconImageHref: map_marker,
              iconImageSize: [32, 32],
              useMapMarginInDragging: true,
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default PointsMap;
