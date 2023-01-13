import { useState } from "react";

import { StartingPoint } from "../type";

const MOCK_DATA = [
  { id: 1, point: undefined, location: { lat: undefined, lng: undefined } },
  { id: 2, point: undefined, location: { lat: undefined, lng: undefined } },
  { id: 3, point: "예제 값", location: { lat: undefined, lng: undefined } },
  { id: 4, point: undefined, location: { lat: undefined, lng: undefined } },
];

export function useStartingPoint() {
  const [startingPoint, setStartingPoint] =
    useState<StartingPoint[]>(MOCK_DATA);

  function deleteItem(id: number) {
    setStartingPoint((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function addItem(point: string) {
    setStartingPoint((prevItems) => [
      ...prevItems,
      {
        id: startingPoint[startingPoint.length].id + 1,
        point: undefined,
        location: { lat: undefined, lng: undefined },
      },
    ]);
  }

  return { startingPoint, deleteItem, addItem };
}
