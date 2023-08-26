import "./detail.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
const DetailReview = () => {
  const [data, setData] = useState([]);
  const { placeId } = useParams();

  const getData = () =>
    axios
      .get(`http://localhost:8080/api/v1/reviews/` + placeId)
      .then((response) => {
        setData(response.data);
        console.log(response.data.user);
      });

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="detail_container">
        <hr className="detail_line"></hr>
        <p className="review_title">Review</p>
        {data.map((el, index) => (
          <>
            <div className="review_wrap" key={index}>
              <div className="review_profile">
                <img src="/images/profile-1.png" alt="" />
                <p className="review_text">{el.user.username}</p>
              </div>
              <div className="review_text">{el.content}</div>
            </div>
            <hr className="detail_line"></hr>
          </>
        ))}
      </div>
    </>
  );
};

export default DetailReview;
