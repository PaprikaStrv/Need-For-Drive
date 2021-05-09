import React, { useRef, useState } from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import s from "./Map.module.scss";
import map_marker from "../../Images/map_marker.svg";
import EmptyMap from "./EmptyMap";

const PointsMap = (props) => {
  let coor = [];
  if (props.coords) {
    coor = props.coords.map((c) => {
      return c.coords.split(" ");
    });
  }
  const map = useRef();

  const mySetCenter = (coordinates) => {
    map.current.setCenter(coordinates);
  };

 // let curPointCoords = [];
  if (props.curPointCoords.length !== 0) {
    let curPointCoords = props.curPointCoords.split(" ");
    mySetCenter([curPointCoords[1], curPointCoords[0]]);
  }

  return (
    <div className={s.mapWrapper}>
      {props.coords.length !== 0 ? (
        <YMaps>
          <Map
            defaultState={{
              center: [coor[0][1], coor[0][0]],
              zoom: 14,
            }}
            width="100%"
            instanceRef={map}
          >
            {coor.map((c, index) => {
              return (
                <Placemark
                  key={index}
                  geometry={[c[1], c[0]]}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: map_marker,
                    iconImageSize: [32, 32],
                    useMapMarginInDragging: true,
                  }}
                  onClick={() => mySetCenter([c[1], c[0]])}
                />
              );
            })}
          </Map>
        </YMaps>
      ) : (
        <EmptyMap />
      )}
    </div>
  );
};

export default PointsMap;
