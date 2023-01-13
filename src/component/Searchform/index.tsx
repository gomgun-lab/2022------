import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import usePrevious from "../../hooks/usePrevious";

interface SearchFormProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  confimrHandler: () => void;
}

const SearchForm = ({ changeHandler, confimrHandler }: SearchFormProps) => {
  const { goPrevious } = usePrevious();

  return (
    <Card>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <div onClick={goPrevious}>
            <ArrowBackIosIcon />
          </div>
          <Input
            autoFocus={true}
            onChange={changeHandler}
            sx={{ flexGrow: 1, marginRight: "10px" }}
          />
          <Button variant="contained" onClick={confimrHandler}>
            검색
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SearchForm;
