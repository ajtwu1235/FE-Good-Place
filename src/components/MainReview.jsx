import "./mainReview.css";
import { useState } from "react";
import { TEXT_DATA } from "../data/TEXT_DATA";

const MainReview = () => {
  const [mainReviewText, setMainBannerText] = useState(TEXT_DATA[0].text);

  const changeText = (data) => {
    setMainBannerText(data.text);
  };

  return (
    <>
      <div className="main_container">
        <p className="main_title">top reviews for foods</p>
        <div className="reviewBox">
          <img src="/images/review.png" alt=""></img>
          <p className="review_text">{mainReviewText}</p>
        </div>
        <div className="review_imgBox">
          {TEXT_DATA.map((data) => {
            return (
              <>
                <button
                  className="review_img_box"
                  onClick={() => {
                    changeText(data);
                  }}
                  name={data.name}
                  key={data.id}
                >
                  <img src="images/person1.png" alt=""></img>
                  <p className="review_img_name">{data.name}</p>
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default MainReview;
