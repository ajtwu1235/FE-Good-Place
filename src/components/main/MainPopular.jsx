import "../../css/main.css";

const MainPopular = () => {
  return (
    <>
      <div className="main_container">
        <p className="main_title">popular restaurant</p>
        <div className="popularBox">
          <div className="popular_box">
            <img className="popular_img" src="/images/5.png" alt=""></img>
            <div className="popular_text">
              <p className="popular_text_name">식당 이름</p>
              <p className="popular_text_address">식당 주소</p>
            </div>
          </div>
          <div className="popular_box">
            <img className="popular_img" src="/images/6.png" alt=""></img>
            <p className="popular_text_name">식당 이름</p>
            <p className="popular_text_address">식당 주소</p>
          </div>
          <div className="popular_box">
            <img className="popular_img" src="/images/7.png" alt=""></img>
            <p className="popular_text_name">식당 이름</p>
            <p className="popular_text_address">식당 주소</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainPopular;
