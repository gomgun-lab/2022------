import { StartingPoint } from "../type";

export const getEquidistantPoint = (points: StartingPoint[]) => {
  const latSum = points.reduce((sum, point) => {
    if (point.location.lat !== undefined) {
      return sum + +point.location.lat;
    }
    return sum + 0;
  }, 0);
  const lngSum = points.reduce((sum, point) => {
    if (point.location.lng !== undefined) {
      return sum + +point.location.lng;
    }
    return sum + 0;
  }, 0);
  const avgLat = latSum / points.length;
  const avgLng = lngSum / points.length;

  return { lat: avgLat, lng: avgLng };
};
