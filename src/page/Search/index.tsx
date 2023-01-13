import React, { Suspense } from "react";

import Grid from "@mui/material/Grid";
import SearchForm from "../../component/Searchform";
import PlaceList from "../../component/PlaceList";
import { ErrorBoundary } from "../../component/ErrorBoundary";

import { useSearchFiled } from "../../hooks/useSearchFiled";

const Loading = () => <div></div>;

const SelectSubPage = () => {
  const { confirmInput, changeHandler, confimrHandler } = useSearchFiled();

  return (
    <Grid container direction="column" gap="10px">
      <SearchForm
        changeHandler={changeHandler}
        confimrHandler={confimrHandler}
      />
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <PlaceList confirmInput={confirmInput} />
        </Suspense>
      </ErrorBoundary>
    </Grid>
  );
};

export default SelectSubPage;
