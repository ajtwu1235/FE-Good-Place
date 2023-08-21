import React, { useEffect } from "react";

const { kakao } = window;

const PlaceMap = () => {
  useEffect(() => {
    const mapContainer = document.getElementById("map"); // 지도를 표시할 div
    const options = {
      center: new kakao.maps.LatLng(33.500227113116004, 126.52914956385872), // 지도의 중심좌표
      level: 1, // 지도의 확대 레벨
    };
    const map = new kakao.maps.Map(mapContainer, options);

    const markerPosition = new kakao.maps.LatLng(
      33.500227113116004,
      126.52914956385872,
    ); // 마커가 표시될 위치입니다

    // 마커 이미지 설정
    const markerImage = new kakao.maps.MarkerImage(
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
      new kakao.maps.Size(64, 69),
      { offset: new kakao.maps.Point(27, 69) },
    );

    // 마커 생성 및 지도에 추가
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });
    marker.setMap(map);

    // 커스텀 오버레이 내용
    const content =
      '<div class="customoverlay">' +
      '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
      "  </a>" +
      "</div>";

    // 커스텀 오버레이 위치 및 설정
    const overlayPosition = new kakao.maps.LatLng(
      33.500227113116004,
      126.52914956385872,
    );
    const customOverlay = new kakao.maps.CustomOverlay({
      position: overlayPosition,
      content: content,
      yAnchor: 1,
    });
    customOverlay.setMap(map);
  }, []);

  return <div id="map" style={{ width: "100%", height: "537px" }}></div>;
};

export default PlaceMap;
