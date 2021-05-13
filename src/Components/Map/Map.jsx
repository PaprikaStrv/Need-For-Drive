import React, { useRef } from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import s from "./Map.module.scss";
import map_marker from "../../Images/map_marker.svg";
import EmptyMap from "./EmptyMap";

const PointsMap = ({
  handlerGetPointCoords,
  curPointAddress,
  pointAddress,
  curPointCoords,
  city,
  coords,
}) => {
  let coor = [];

  if (coords) {
    coor = coords.map((c) => {
      return c.coords.split(" ");
    });
  }

  const map = useRef();

  const mySetCenter = (coordinates) => {
    map.current.setCenter(coordinates);
  };

  if (map.current && curPointCoords.length !== 0) {
    curPointCoords = curPointCoords.split(" ");
    mySetCenter([curPointCoords[1], curPointCoords[0]]);
  }

  return (
    <div className={s.mapWrapper}>
      {coords.length !== 0 ? (
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
                  onClick={() => {
                    mySetCenter([c[1], c[0]]);
                    handlerGetPointCoords(c);
                  }}
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
