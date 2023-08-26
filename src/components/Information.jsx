import YourReviewModal from "./YourReviewModal";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PlaceMap from "./Map";

const Information = ({ placeId }) => {
  const [modalShow, setModalShow] = useState(false);

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

  //좋아요 수 가져오기

  const [totalFav, setTotalFav] = useState(0);

  const getTotalFav = () =>
    axios.get("http://localhost:8080/favorite/" + placeId).then((response) => {
      setTotalFav(response.data);
      console.log(response);
    });

  //리뷰 수 가져오기

  const [totalReview, setTotalReview] = useState(0);

  const getTotalReview = () =>
    axios
      .get("http://localhost:8080/api/v1/reviews/count/" + placeId)
      .then((response) => {
        setTotalReview(response.data);
        console.log(response);
      });

  useEffect(() => {
    getTotalFav();
    getTotalReview();
  }, []);

  const userId = localStorage.getItem("userId");
  const id = storeData.id;
  const postFav = () => {
    axios
      .post("http://localhost:8080/favorite", {
        userId: userId, // Replace with the actual user ID
        storeId: id, // Replace with the actual store ID
      })
      .then((response) => {
        console.log(response);
        // Handle any other logic after successful POST
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        // Handle error cases
      });
  };
  return (
    <>
      <div style={{ marginTop: "80px" }}>
        <div className="detail_text_container">
          <div className="detail_title_box">
            <p className="detail_title">{storeData.name}</p>
            <div className="detail_title_box detail_wrap">
              <button
                className="detail_title_box detail_review"
                onClick={() => setModalShow(true)}
              >
                <img src="/images/review1.svg" alt="" />
                <p className="detail_text">Review</p>
              </button>
              <button
                className="detail_title_box detail_like"
                onClick={postFav}
              >
                <img src="/images/heart-1.svg" alt="" />
                <p className="detail_text">Like</p>
              </button>
            </div>
          </div>
          <div className="detail_sm">
            <div className="detail_sm detail_sm_wrap">
              <div className="detail_sm detail_review_sm">
                <img src="/images/review1.svg" alt="" />
                <p>{totalReview}</p>
              </div>
              <div className="detail_sm detail_like_sm">
                <img src="/images/heart-1.svg" alt="" />
                <p>{totalFav}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
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
      <YourReviewModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        storeId={storeData.id}
        placeId={placeId}
      />
    </>
  );
};

export default Information;
