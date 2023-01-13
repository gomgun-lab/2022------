import React from "react";
import { useNavigate } from "react-router-dom";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { useStartingPointState } from "../../context/StartingPointContext";
import { StartingPoint } from "../../type";
import { color } from "../../styles/theme";

const itemStyleswithNoValue = {
  background: `${color.blue_30}`,
  border: `1px solid ${color.deep_blue}`,
  borderRadius: "5px",
  "&:hover": {
    cursor: "pointer",
    border: `2px solid ${color.black}`,
  },
};

const itemStyleswithValue = {
  background: `${color.very_light_gray}`,
  borderRadius: "5px",
  "&:hover": {
    cursor: "pointer",
    border: `2px solid ${color.black}`,
  },
};

const textStylesWithNoValue = {
  color: `${color.deep_blue}`,
};

const textStylesWithValue = {
  color: `${color.dark_gray}`,
};

interface SPprops extends Omit<StartingPoint, "location"> {
  index: number;
}

const StartingPointItem = (props: SPprops) => {
  const { deleteItem } = useStartingPointState();
  const navigate = useNavigate();

  const { id, point, index } = props;
  const text = point ? point : "출발지를 입력해주세요";

  return (
    <ListItem key={id} sx={point ? itemStyleswithValue : itemStyleswithNoValue}>
      <ListItemText
        onClick={() => navigate(`/search/${id}`)}
        primary={`${index + 1}. ${text}`}
        sx={point ? textStylesWithValue : textStylesWithNoValue}
      />
      {index > 1 && (
        <ListItemIcon
          sx={{ flexDirection: "row-reverse" }}
          onClick={() => deleteItem(id)}
        >
          <HighlightOffIcon
            sx={point ? textStylesWithValue : textStylesWithNoValue}
          />
        </ListItemIcon>
      )}
    </ListItem>
  );
};

export default StartingPointItem;
