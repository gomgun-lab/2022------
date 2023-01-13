import React, { useEffect } from "react";

import { Place } from "../../type";
import { createMarker, createPolyLine } from "../../utils/mapUtils";

import { CENTER_MARKER, STARTING_MARKER } from "../../assets/img";

const { kakao } = window;

interface MapProps {
  centerStation?: Place;
  startingStations: (Place | undefined)[];
  locations: Promise<
    {
      longitude: string;
      latitude: string;
    }[][]
  >;
}

const Map = ({ centerStation, startingStations, locations }: MapProps) => {
  useEffect(() => {
    const container = document.getElementById("map") as HTMLDivElement;

    const { x: centerX, y: centerY } = centerStation as Place;

    const options = {
      center: new kakao.maps.LatLng(+centerY - +0.01, +centerX),
      level: 7,
    };

    const map = new kakao.maps.Map(container, options);

    createMarker(map, CENTER_MARKER, +centerY, +centerX);

    startingStations?.forEach((station) => {
      const { x, y } = station as Place;
      createMarker(map, STARTING_MARKER, +y, +x);
    });

    locations.then((value) => createPolyLine(map, value));
  }, [centerStation, startingStations, locations]);

  return (
    <div
      id="map"
      style={{
        width: "100vw",
        height: "100%",
        position: "absolute",
      }}
    ></div>
  );
};

export default Map;
