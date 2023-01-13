import { useQueries, useQuery } from "@tanstack/react-query";
import { fetchPlaces, fetchStations } from "../api/places";

import { StartingPoint } from "../type";
import { getEquidistantPoint } from "../utils/pointLocation";

const RADIUS = 5000;
const STATION_GROUP_CODE = "SW8";

const getConfig = (lat?: number, lng?: number, size: number = 15) => {
  return {
    x: lat || 0,
    y: lng || 0,
    radius: RADIUS,
    category_group_code: STATION_GROUP_CODE,
    size,
  };
};

export function useStartingStation(points: StartingPoint[]) {
  const stationQueries = useQueries({
    queries: points.map((point) => {
      const { lat, lng } = point.location;

      return {
        queryKey: ["stations-starting", point.id],
        queryFn: () => fetchStations(getConfig(lat, lng)),
        suspense: true,
      };
    }),
  });

  return stationQueries;
}

export function useCenterStation(points: StartingPoint[]) {
  const { lat, lng } = getEquidistantPoint(points);

  const { data } = useQuery({
    queryKey: ["station-center"],
    queryFn: () => fetchStations(getConfig(lat, lng)),
    suspense: true,
  });

  return { data };
}

export async function usePathLocation(paths: Array<string[]>) {
  const results = paths.map((path) => {
    return path.map(async (station) => {
      const results = await fetchPlaces({
        query: station + "역",
        category_group_code: "SW8",
        size: 1,
      });

      const { x: longitude, y: latitude } = results.documents[0];

      return { longitude, latitude };
    });
  });

  const path = [];

  for await (const result of results) {
    const tempArr = [];
    for await (const value of result) {
      tempArr.push(value);
    }
    path.push(tempArr);
  }

  return path;
}
