import { useEffect, useState } from "react";
import "./story.css";
import axios from "axios";

const StoryBox = () => {
  const [data, setData] = useState([]);
  console.log("userId", data);
  const getData = () =>
    axios.get("http://localhost:8080/favorite").then((response) => {
      console.log(response.data);
      setData(response.data);
    });

  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <>
      {data.map((el, index) => (
        <div className="storyBox">
          <div className="storybox_wrap">
            <a href={`/mainStory/${index}/${el[0]}`} className="photo_size">
              <img
                src="/images/friedpork.png"
                alt="pork"
                className="story_food_img"
              />
            </a>
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
      ))}
    </>
  );
};
export default StoryBox;
