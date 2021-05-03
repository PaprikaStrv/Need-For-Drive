import React from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import s from "./Map.module.scss";
import map_marker from "../../Images/map_marker.svg";

const PointsMap = (props) => {

  let coor = [];

  coor = props.coords.map((c) => {
    return c.coords.split(" ");
  });


  return (
    <div className={s.mapWrapper}>
      <YMaps>
        <Map
          defaultState={{
            center: [coor[0][1], coor[0][0]],
            zoom: 10,
          }}
          width="100%"
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
              />
            );
          })}
        </Map>
      </YMaps>
    </div>
  );
};

export default PointsMap;
