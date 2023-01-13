const { kakao } = window;

export const createMarker = (
  map: kakao.maps.Map,
  url: string,
  y: number,
  x: number
) => {
  const imgSrc = url;
  const imgSize = new kakao.maps.Size(32, 35);
  const imageOption = { offset: new kakao.maps.Point(15, 35) };

  const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imageOption);
  const markerPosition = new kakao.maps.LatLng(y, x);

  const marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
  });

  marker.setMap(map);
};

export const createPolyLine = (
  map: kakao.maps.Map,
  locations: {
    latitude: string;
    longitude: string;
  }[][]
) => {
  const linePath = locations.map((location) =>
    location.map(
      ({ latitude, longitude }) => new kakao.maps.LatLng(+latitude, +longitude)
    )
  );

  const polyline = new kakao.maps.Polyline({
    path: linePath,
    strokeWeight: 5,
    strokeOpacity: 1,
    strokeStyle: "solid",
  });

  polyline.setMap(map);
};
