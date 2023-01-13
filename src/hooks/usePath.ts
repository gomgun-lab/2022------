import { useStartingPointState } from "../context/StartingPointContext";
import {
  useCenterStation,
  useStartingStation,
  usePathLocation,
} from "../queries/useStations";

import { AVAILABLE_LINE } from "../constant";
import { getStationLine } from "../utils/parseStationName";
import { findPath } from "../utils/findPath";

const getAvilableLine = (place_name: string) =>
  AVAILABLE_LINE[getStationLine(place_name) as keyof typeof AVAILABLE_LINE];

export const usePath = () => {
  const { startingPoint } = useStartingPointState();
  const stationQueries = useStartingStation(startingPoint);
  const { data } = useCenterStation(startingPoint);

  const statingStations = stationQueries.map(
    (query) =>
      query.data?.documents.filter(({ place_name }) => {
        return getAvilableLine(place_name);
      })[0]
  );

  const centerStation = data?.documents.filter(({ place_name }) =>
    getAvilableLine(place_name)
  )[0];

  const paths: Array<string[]> = statingStations.map((startingStation) =>
    findPath(startingStation, centerStation)
  );

  const locations = usePathLocation(paths);

  return {
    paths,
    locations,
    centerStation,
    statingStations,
  };
};
