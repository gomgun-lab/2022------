export const BASE_URL_MAP = {
  KAKAO: process.env.REACT_APP_API_KAKAO_URL,
};

const TOKEN_MAP = {
  KAKAO: process.env.REACT_APP_API_KAKAO_TOKEN,
};

export const METHOD = {
  GET: "get",
};

export const URL = {
  SEARCH_BY_KEYWORD: "/v2/local/search/keyword.json",
  SEARCH_BY_CATEGORY: "/v2/local/search/category.json",
};

export const endpointToTokenMap = new Map();

endpointToTokenMap.set(BASE_URL_MAP.KAKAO, `KakaoAK ${TOKEN_MAP.KAKAO}`);

export const AVAILABLE_LINE = {
  "01호선": true,
  "02호선": true,
  "03호선": true,
  "04호선": true,
  "05호선": true,
  "06호선": true,
  "07호선": true,
  "08호선": true,
  "09호선": false,
  인천1호선: false,
  인천2호선: false,
  수인분당선: false,
  신분당: false,
  경의중앙: false,
  공항철도: false,
  경춘선: false,
  의정부경전철: false,
  용인경전철: false,
  경강선: false,
  우이신설경전철: false,
  서해선: false,
  김포도시철도: false,
  신림선: false,
};

// export const AVAILABLE_LINE = new Map<string, boolean>();

// AVAILABLE_LINE.set("01호선", true);
