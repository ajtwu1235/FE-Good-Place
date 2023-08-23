import "./detail.css";
import React from "react";
import PlaceMap from "./Map";

const Information = () => {
  return (
    <>
      <div
        style={{
          marginTop: "80px",
        }}
      >
        <ul style={{ listStyleType: "none" }}>
          <li
            style={{
              color: "#1E1E1E",
              fontSize: "34px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            식당 이름
          </li>
          <hr />
        </ul>
        <ul
          style={{
            marginTop: "31px",

            width: "1124px",
            height: "435px",
            listStyleType: "none",
            color: "#000",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "57px",
          }}
        >
          <li>주소 : </li>
          <li>음식 종류 : </li>
          <li>전화번호 : </li>
          <li>가게 정보: </li>
          <li>추천 아이디 : </li>
        </ul>
        <PlaceMap />
        <hr />
      </div>
    </>
  );
};

export default Information;
