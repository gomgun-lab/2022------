const AVAILIABLE_FR_CODE = 3;

/**
 * @param rawMetroData 서울시에서 제공받은 지하철 노선도 json 파일
 * @param availableLine 이용가능한 호선 정보를 갖고 있는 객체(해시테이블)
 */

function preProcessor(rawMetroData, availableLine) {
  const results = {};

  rawMetroData
    .filter(({ line_num }) => availableLine[line_num] === true)
    .forEach(({ line_num, station_nm, fr_code }) => {
      const stationInfo = { line_num, station_nm, fr_code };

      if (fr_code.length === AVAILIABLE_FR_CODE) {
        if (results[line_num]) {
          results[line_num].push(stationInfo);
        } else {
          results[line_num] = [stationInfo];
        }
      }
    });

  Object.keys(results).forEach((key) => {
    results[key].sort((a, b) => {
      return Number(a.fr_code) - Number(b.fr_code);
    });
  });

  console.log(results);

  return results;
}

function generator(stationInfoByLine) {
  const results = {};

  for (const [key, _] of Object.entries(stationInfoByLine)) {
    stationInfoByLine[key].forEach((station, index) => {
      const { station_nm: currentStation } = station;

      const route = [];

      const prevStation = stationInfoByLine[key][index - 1];
      const nextStation = stationInfoByLine[key][index + 1];

      if (prevStation) route.push(prevStation);
      if (nextStation) route.push(nextStation);

      if (results[currentStation]) {
        results[currentStation].push(...route);
      } else {
        results[currentStation] = [...route];
      }
    });
  }

  console.log(results);

  return results;
}

module.exports = {
  preProcessor,
  generator,
};
