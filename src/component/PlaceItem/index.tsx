import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { useStartingPointState } from "../../context/StartingPointContext";
import { color } from "../../styles/theme";

interface Pprops {
  addressName: string;
  lat: number;
  lng: number;
}

const PlaceItem = ({ addressName, lat, lng }: Pprops) => {
  const { setPoint } = useStartingPointState();
  const { id: pointId } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    setPoint({ id: +pointId!, point: addressName, location: { lat, lng } });
    navigate("/");
  };

  return (
    <ListItem
      onClick={handleClick}
      sx={{
        "&:hover": {
          cursor: "pointer",
          background: `${color.very_light_gray}`,
        },
      }}
    >
      <ListItemText primary={addressName} />
    </ListItem>
  );
};

export default PlaceItem;
