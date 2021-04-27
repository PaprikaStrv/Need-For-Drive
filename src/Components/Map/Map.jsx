import React from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import s from "./Map.module.scss";
import map_marker from "../../Images/map_marker.svg";

const PointsMap = (props) => {
  return (
    <div className={s.mapWrapper}>
      <YMaps>
        <Map
          defaultState={{
            center: [54.187427, 45.181728],
            zoom: 15,
          }}
          width="100%"
          height="500px"
        >
          <Placemark
            key={0}
            geometry={[54.187427, 45.181728]}
            options={{
              iconLayout: "default#image",
              iconImageHref: map_marker,
              iconImageSize: [18, 18],
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default PointsMap;
