import axios from "axios";
import { endpointToTokenMap } from "../../constant";

export const httpClient = axios.create();

httpClient.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `${endpointToTokenMap.get(config.baseURL)}`,
  };

  return config;
});
