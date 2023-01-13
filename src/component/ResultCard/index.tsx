import React from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { usePath } from "../../hooks/usePath";
import { getStationName } from "../../utils/parseStationName";
import { useNavigate } from "react-router-dom";
import { useStartingPointState } from "../../context/StartingPointContext";

export const ResultCard = () => {
  const { paths, centerStation, statingStations } = usePath();

  const navigate = useNavigate();
  const { resetPoint } = useStartingPointState();

  const handleClick = () => {
    resetPoint();
    navigate("/");
  };

  return (
    <Card sx={{ zIndex: 10, marginTop: "auto" }}>
      <CardContent>
        <Grid container direction="column" gap="15px">
          {/* <Card>
            <CardContent>
              <Typography variant="h4">출발역</Typography>
              {statingStations.map((startingStation) => (
                <Typography variant="h6">
                  {getStationName(startingStation?.place_name || "")}
                </Typography>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h4">도착역</Typography>
              <Typography variant="h6">
                {getStationName(centerStation?.place_name || "")}
              </Typography>
            </CardContent>
          </Card> */}
          <Card>
            <CardContent>
              <Typography variant="h4">경로</Typography>
              {paths.map((stations: string[]) => (
                <Box>
                  {stations.map((station) => (
                    <Typography variant="h6" component={"span"}>
                      &nbsp;{station}
                    </Typography>
                  ))}
                </Box>
              ))}
            </CardContent>
          </Card>
          <Button variant="contained" onClick={handleClick}>
            다시 찾기
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
