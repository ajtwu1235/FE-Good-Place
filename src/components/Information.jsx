import React from "react";
import Map from "./Map";
import PlaceMap from "./Map";

const Information = () => {
  return (
    <>
      <div
        style={{
          marginTop: "80px",
          // marginLeft: "121px",
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
            lineHeight: "57px" /* 203.571% */,
          }}
        >
          <li>주소 : </li>
          <li>음식 종류 : </li>
          <li>전화번호 : </li>
          <li>가게 정보: </li>
          <li>추천 아이디 : </li>
        </ul>

        {/*<img*/}
        {/*  style={{*/}
        {/*    marginTop: "52px",*/}
        {/*    width: "100%",*/}
        {/*    height: "auto",*/}
        {/*    textAlign: "center",*/}
        {/*    marginBottom: "42px",*/}
        {/*  }}*/}
        {/*  src="https://github.com/PLAYDATA-GOOD-PLACE/FE-Good-Place/assets/87232411/f208d39e-c165-4dcd-b5d3-f36743e0a359"*/}
        {/*  alt="movie"*/}
        {/*/>*/}
        <PlaceMap />
        <hr />
      </div>
    </>
  );
};

export default Information;
