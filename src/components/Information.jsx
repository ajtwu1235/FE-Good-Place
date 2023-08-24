import "./detail.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PlaceMap from "./Map";
import { data } from "../data/place";

const Information = ({ placeId }) => {
  const [storeData, setStoreData] = useState({
    id: 0,
    placeId: "",
    name: "",
    address: "",
    phone: "",
    foodType: "",
    storeImgUrl: "",
    coordinateX: "",
    coordinateY: "",
    users: [],
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/client/place/${placeId}`)
      .then((response) => {
        const data = response.data;
        setStoreData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [placeId]);

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
            {storeData.name}
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
          <li>주소: {storeData.address}</li>
          <li>음식 종류: {storeData.foodType}</li>
          <li>전화번호: {storeData.phone}</li>
          <li>
            추천 사용자:{" "}
            {storeData.users.map((user) => user.username).join(", ")}
          </li>
        </ul>
        <PlaceMap
          coordinateX={storeData.coordinateX}
          coordinateY={storeData.coordinateY}
        />
      </div>
    </>
  );
};

export default Information;
