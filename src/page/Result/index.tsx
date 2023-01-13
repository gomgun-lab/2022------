import React from "react";

import Grid from "@mui/material/Grid";
import ResultCard from "../../component/ResultCard";
import Map from "../../component/Map";
import { usePath } from "../../hooks/usePath";

const Result = () => {
  const { paths, locations, centerStation, statingStations } = usePath();

  return (
    <Grid container direction="column" height="100vh">
      <Map
        centerStation={centerStation}
        startingStations={statingStations}
        locations={locations}
      />
      <ResultCard />
    </Grid>
  );
};

export default Result;
