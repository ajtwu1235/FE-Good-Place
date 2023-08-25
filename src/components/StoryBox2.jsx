import "./story.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const StoryBox2 = ({ storeId }) => {
  const [data, setData] = useState([]);
  const el = data.length === 0 ? { count: 0, username: "Amy" } : data[storeId];
  const getData = () =>
    axios.get("http://localhost:8080/favorite").then((response) => {
      console.log(response.data);
      setData(response.data);
    });

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/*{data.map((el, index) => (*/}
      <div className="storyBox">
        <div className="storybox_wrap_fixed">
          <img
            src="/images/friedpork.png"
            alt="pork"
            className="story_food_img"
          />

          <div className="storybox_text">
            <div className="storybox_wrap1">
              <p className="story_text story_text1">Editer.</p>
              <p className="story_text story_text2">{el[1]}</p>
            </div>
            <p className="story_text story_title">
              {el[1]}(이)가 선택한 맛집 {el[2]}곳
            </p>
            <p className="story_text story_title2"> 맛집 인기 터짐!</p>
            <div className="storybox_wrap2">
              <img
                src="/images/heart-1.svg"
                alt="heart"
                className="story_like_small"
              />
              <span className="story_text story_like_count">{el[3]}</span>
            </div>
          </div>
        </div>
      </div>
      {/*))}*/}
    </>
  );
};
export default StoryBox2;
