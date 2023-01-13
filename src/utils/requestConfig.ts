import { BASE_URL_MAP } from "../constant";
import { RequestConfig } from "../type";

export const getKakaoConfig = (
  url: string,
  method: string,
  params: RequestConfig
) => {
  return {
    url,
    method,
    params,
    baseURL: BASE_URL_MAP.KAKAO,
  };
};
