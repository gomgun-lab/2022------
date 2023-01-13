import React from "react";

import List from "@mui/material/List";
import StartingPointItem from "../StartingPointItem";
import { useStartingPointState } from "../../context/StartingPointContext";

const StartingPointList = () => {
  const { startingPoint } = useStartingPointState();

  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        width: "100%",
      }}
    >
      {startingPoint.map(({ id, point }, index) => {
        return (
          <StartingPointItem key={id} id={id} point={point} index={index} />
        );
      })}
    </List>
  );
};

export default StartingPointList;
