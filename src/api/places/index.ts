import { httpClient } from "../base";
import { getKakaoConfig } from "../../utils/requestConfig";
import { METHOD, URL } from "../../constant";
import { AxiosResponse } from "axios";

import { Places } from "../../type";

import { FetchPlacesParams, FetchStationsParams } from "../../type";

export const fetchPlaces = async (params: FetchPlacesParams) => {
  const { data }: AxiosResponse<Places> = await httpClient.request(
    getKakaoConfig(URL.SEARCH_BY_KEYWORD, METHOD.GET, params)
  );

  return data;
};

export const fetchStations = async (params: FetchStationsParams) => {
  const { data }: AxiosResponse<Places> = await httpClient.request(
    getKakaoConfig(URL.SEARCH_BY_CATEGORY, METHOD.GET, params)
  );

  return data;
};
