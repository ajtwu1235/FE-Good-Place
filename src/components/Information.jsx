import "./detail.css";
import React, {useState} from "react";
import PlaceMap from "./Map";
import YourReviewModal from "./YourReviewModal";

const Information = () => {
    const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div
        style={{
          marginTop: "80px",
        }}
      >
        <ul style={{ listStyleType: "none", listStyle:"none" }}>
            <div className="detail_text_container">
                <div className="detail_title_box">
                    <p className="detail_title">식당이름</p>
                    <div className=" detail_title_box detail_wrap">
                        <button className=" detail_title_box detail_review" onClick={() => setModalShow(true)}>
                            <img src="/images/review1.svg" alt=""/>
                            <p className="detail_text">Review</p>
                        </button>
                        <button className=" detail_title_box detail_like">
                            <img src="/images/heart-1.svg" alt=""/>
                            <p className="detail_text">Like</p>
                        </button>
                    </div>
                </div>
                <div className="detail_sm">
                    <div className="detail_sm detail_sm_wrap">
                        <div className=" detail_sm detail_review_sm">
                            <img src="/images/review1.svg" alt=""/>
                            <p>1234</p>
                        </div>
                        <div className="detail_sm detail_like_sm">
                            <img src="/images/heart-1.svg" alt=""/>
                            <p>1234</p>
                        </div>
                    </div>
                </div>
            </div>
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
        <YourReviewModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </>
  );
};

export default Information;
