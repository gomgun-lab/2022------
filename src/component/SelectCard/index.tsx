import React from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import StartingPointList from "../StartingPointList";

import { useStartingPointState } from "../../context/StartingPointContext";
import { useNavigate } from "react-router-dom";
import { color } from "../../styles/theme";

const SelectCard = () => {
  const { addItem } = useStartingPointState();
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <StartingPointList />
          <Typography
            variant="button"
            display="block"
            component="div"
            onClick={addItem}
            padding="3px"
            gutterBottom
            sx={{
              "&:hover": {
                cursor: "pointer",
                background: `${color.very_light_gray}`,
              },
            }}
          >
            장소 추가하기
          </Typography>
          <Button variant="contained" onClick={() => navigate("/result")}>
            중간장소 찾기
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SelectCard;
