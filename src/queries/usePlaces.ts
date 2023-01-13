import { useQuery } from "@tanstack/react-query";
import { fetchPlaces } from "../api/places";

export function usePlaces(place: string) {
  let { data } = useQuery({
    queryKey: ["places", place],
    queryFn: () => fetchPlaces({ query: place ? place : "''" }),
    suspense: true,
  });

  return { data };
}
