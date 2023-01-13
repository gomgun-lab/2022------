export const getStationName = (stationFullName: string) => {
  const stationWithLastChar = stationFullName.split(" ")[0];
  return stationWithLastChar.slice(0, stationWithLastChar.length - 1);
};

export const getStationLine = (stationFullName: string) => {
  const text = stationFullName.split(" ")[1];

  if (isIncludeNumber(text)) {
    return "0" + text;
  }

  return text;
};

const isIncludeNumber = (text: string) => {
  return text.split("").find((elem) => Number.isInteger(+elem)) ? true : false;
};
