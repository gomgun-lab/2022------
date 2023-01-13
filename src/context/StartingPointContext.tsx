import { createContext, ReactNode, useContext, useState } from "react";

import { StartingPoint } from "../type";

const INIT_DATA: StartingPoint[] = [
  { id: 1, point: undefined, location: { lat: undefined, lng: undefined } },
  { id: 2, point: undefined, location: { lat: undefined, lng: undefined } },
];

const MAX = 4;

const defaultValues = {
  startingPoint: INIT_DATA,
  deleteItem: (id: number) => {},
  addItem: () => {},
  setPoint: ({ id, point, location }: StartingPoint) => {},
  resetPoint: () => {},
};

const StartingPointContext = createContext(defaultValues);

export const useStartingPointState = () => useContext(StartingPointContext);

interface SPprops {
  children: ReactNode;
}

export default function StartingPointContextProvider({ children }: SPprops) {
  const [startingPoint, setStartingPoint] =
    useState<StartingPoint[]>(INIT_DATA);

  const deleteItem = (id: number) => {
    setStartingPoint((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addItem = () => {
    if (startingPoint.length > MAX) {
      return;
    }

    setStartingPoint((prevItems) => [
      ...prevItems,
      {
        id: startingPoint[startingPoint.length - 1].id + 1,
        point: undefined,
        location: { lat: undefined, lng: undefined },
      },
    ]);
  };

  const setPoint = ({ id, point, location }: StartingPoint) => {
    setStartingPoint((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { id, point, location };
        }

        return item;
      })
    );
  };

  const resetPoint = () => {
    setStartingPoint(INIT_DATA);
  };

  const value = { startingPoint, deleteItem, addItem, setPoint, resetPoint };

  return (
    <StartingPointContext.Provider value={value}>
      {children}
    </StartingPointContext.Provider>
  );
}
