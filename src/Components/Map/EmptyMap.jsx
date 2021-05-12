import React from "react";
import { Map, YMaps } from "react-yandex-maps";
import s from "./Map.module.scss";

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
