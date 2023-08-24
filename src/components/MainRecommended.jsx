import "./main.css";
import {Link} from "react-router-dom";

const MainRecommended = () => {
  return (
    <>
      <div className="recommended_img">
        <p className="main_title">recommended restaurants</p>
        <div className="foodBox">
          <div className="total_box box_grid1 ">
            <div className="box_img">
              <img src="/images/1.png" className="imgA" alt={"cover"} />
              <div className="cover"></div>
            </div>
            <div className="food_inner">
              <p className="food_text">수정 맛집</p>
              <button className="food_btn">10 food</button>
            </div>
          </div>

          <div className="total_box box_grid2 ">
            <div className="box_img">
              <img src="/images/2.png" alt=""></img>
              <div className="cover"></div>
            </div>
            <div className="food_inner">
              <p className="food_text">지혜 맛집</p>
              <button className="food_btn">10 food</button>
            </div>
          </div>

          <div className="total_box box_grid3 ">
            <div className="box_img" v>
              <img src="/images/3.png" alt=""></img>
              <div className="cover"></div>
            </div>
            <div className="food_inner">
              <p className="food_text">태홍 맛집</p>
              <button className="food_btn">10 food</button>
            </div>
          </div>

          <div className="total_box box_grid4 ">
            <div className="box_img">
              <img src="/images/4.png" alt="" className="imgD"></img>
              <div className="cover"></div>
            </div>
            <div className="food_inner">
              <p className="food_text">독산 맛집</p>
              <button className="food_btn">10 food</button>
            </div>
          </div>
        </div>
        <Link to='/story' style={{textDecoration:'none'}}><button className="food_btn btn_more">view more</button> </Link>
      </div>
    </>
  );
};

export default MainRecommended;
