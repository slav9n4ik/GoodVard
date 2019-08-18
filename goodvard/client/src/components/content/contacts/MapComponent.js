import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

let MapComponent = props => {
  const mapState = {
    center: [55.60105316368484, 38.086919431213325],
    zoom: 16,
    controls: ["zoomControl"]
  };

  const mapModules = ["control.ZoomControl"];

  const placeMark = {
    geometry: [55.60105316368484, 38.086919431213325]
  };

  return (
    <YMaps>
      <Map state={mapState} modules={mapModules} className="map-container">
        <Placemark {...placeMark} />
      </Map>
    </YMaps>
  );
};

export default MapComponent;
