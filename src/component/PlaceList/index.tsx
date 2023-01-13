import React from "react";

import List from "@mui/material/List";
import PlaceItem from "../PlaceItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { usePlaces } from "../../queries/usePlaces";

interface PlaceListProps {
  confirmInput: string;
}

const PlaceList = ({ confirmInput }: PlaceListProps) => {
  const { data } = usePlaces(confirmInput);

  return (
    <Card>
      <CardContent>
        <List>
          {data?.documents.map((place: any) => (
            <li key={place.id}>
              <PlaceItem
                addressName={place.address_name}
                lat={place.x}
                lng={place.y}
              />
            </li>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default PlaceList;
