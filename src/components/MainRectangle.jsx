import MainRecommended from "./MainRecommended";
import MainPopular from "./MainPopular";
import MainShared from "./MainShared";
import MainReview from "./MainReview";
import MainTeam from "./MainTeam";
import "./main.css";

const MainRectangle = () => {
  return (
    <>
      <div className="main_wrap">
        <div className="main_photo_wrap">
          <img src="/images/main_food.png" alt="" className="main_food"></img>
          <div className="main_food_cover"></div>
        </div>
        <div className="main_inner_wrap">
          <div className="main_inner_text">
            <p className="main_text main_text_sm ">내가 추천한 맛집</p>
            <p className="main_text">Let's Eat Now</p>
          </div>
          <div className="main_search">
            <input className="main_input_search" />
            <button className="main_search_btn">
              <img
                className="main_search_img"
                src="/images/group-72.svg"
                alt={"main-search"}
              />
            </button>
          </div>
        </div>
      </div>

      <MainRecommended />
      <MainPopular />
      <MainShared />
      <MainReview />
      <MainTeam />
    </>
  );
};
export default MainRectangle;
