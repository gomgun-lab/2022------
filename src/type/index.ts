export type StartingPoint = {
  id: number;
  point?: string;
  location: {
    lat?: number;
    lng?: number;
  };
};

export type Place = {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
};

export type Places = {
  documents: Place[];
};

export type FetchPlacesParams = {
  query: string;
  category_group_code?: string;
  size?: number;
};

export type FetchStationsParams = {
  x: number;
  y: number;
  radius: number;
  category_group_code: string;
};

export type RequestConfig = FetchPlacesParams | FetchStationsParams;

type SubwayLine = {
  line_num: string;
  station_nm: string;
  fr_code: string;
};

export type SubwayLines = {
  [station: string]: SubwayLine[];
};
