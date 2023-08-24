import "./main.css";
import {useEffect, useState} from "react";
import axios from "axios";

const MainPopular = () => {
  const [data, setData] = useState([]);

  const getData = () =>
      axios.get("http://localhost:8080/api/v1/client?size=3").then((response) => {
        console.log(response.data);
        setData(response.data.content);
      });

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="main_container">
        <p className="main_title">popular restaurant</p>
        <div className="popularBox">
          {data.map((el) => (
            <div className="popular_box" key={el.id}>
              <img className="popular_img" src="/images/5.png" alt=""></img>
              <div className="popular_text">
                <p className="popular_text_name">{el.name}</p>
                <p className="popular_text_address">{el.address}</p>
              </div>
            </div>
          ))}
          {/*<div className="popular_box">*/}
          {/*  <img className="popular_img" src="/images/6.png" alt=""></img>*/}
          {/*  <p className="popular_text_name">식당 이름</p>*/}
          {/*  <p className="popular_text_address">식당 주소</p>*/}
          {/*</div>*/}
          {/*<div className="popular_box">*/}
          {/*  <img className="popular_img" src="/images/7.png" alt=""></img>*/}
          {/*  <p className="popular_text_name">식당 이름</p>*/}
          {/*  <p className="popular_text_address">식당 주소</p>*/}
          {/*</div>*/}
        </div>
      </div>
    </>
  );
};
export default MainPopular;
