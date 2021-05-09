import React from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import s from "./Map.module.scss";
import map_marker from "../../Images/map_marker.svg";

const EmptyMap = (props) => {
  return (
    <div className={s.mapWrapper}>
        <YMaps>
          <Map
            state={{
              center: [55, 54],
              zoom: 5,
            }}
            width="100%"
          >
          </Map>
        </YMaps>
    </div>
  );
};

export default EmptyMap;
