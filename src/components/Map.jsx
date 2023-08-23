import React, { useEffect } from "react";

const { kakao } = window;

const PlaceMap = ({ coordinateX, coordinateY }) => {
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(coordinateY, coordinateX),
      level: 3,
    };
    const map = new kakao.maps.Map(mapContainer, options);

    const markerPosition = new kakao.maps.LatLng(coordinateY, coordinateX);

    const markerImage = new kakao.maps.MarkerImage(
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
      new kakao.maps.Size(64, 69),
      { offset: new kakao.maps.Point(27, 69) },
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });
    marker.setMap(map);

    const content =
      '<div class="customoverlay">' +
      '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
      "  </a>" +
      "</div>";

    const overlayPosition = new kakao.maps.LatLng(coordinateY, coordinateX);
    const customOverlay = new kakao.maps.CustomOverlay({
      position: overlayPosition,
      content: content,
      yAnchor: 1,
    });
    customOverlay.setMap(map);

    function setZoomable(zoomable) {
      map.setZoomable(zoomable);
    }

    setZoomable(false);
  }, [coordinateX, coordinateY]);

  return <div id="map" style={{ width: "100%", height: "537px" }}></div>;
};

export default PlaceMap;
