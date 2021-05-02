import React, { useRef, useState } from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import s from "./Map.module.scss";
import map_marker from "../../Images/map_marker.svg";

const PointsMap = (props) => {
  let coor = [];

  // if(props.coords.length === 0) {
  // coords = [99.505405, 61.698653];
  //} else {
  //coords = props.coords.coords.split(" ");
  
  coor = props.coords.map((c) => {
    return c.coords.split(" ");
  })

  //coor = coor.split(" ");
  //   coords.map(s => parseFloat(s));
  // }
  let a = [];

  coor.map((c) => {
    console.log(c[1], c[0]);
  })

  

  return (
    <div className={s.mapWrapper}>
      <YMaps>
        <Map
          defaultState={{
            center: [0, 0],
            zoom: 5,
          }}
          width="100%"
        >
          {coor.map((c, index) => {
            return (
              <Placemark
                key={index}
                geometry={(c[1], c[0])}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: map_marker,
                  iconImageSize: [32, 32],
                  useMapMarginInDragging: true,
                }}
              />
            );
          })}
          {/* <Placemark
            key={0}
            geometry={[coords[1], coords[0]]}
            options={{
              iconLayout: "default#image",
              iconImageHref: map_marker,
              iconImageSize: [32, 32],
              useMapMarginInDragging: true,
            }}
          /> */}
        </Map>
      </YMaps>
    </div>
  );
};

export default PointsMap;
