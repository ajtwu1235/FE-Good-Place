import { useEffect, useState } from "react";
import "./story.css";
import StoryBox from "./StoryBox";
import axios from "axios";

const Story = () => {

  const [data,setData]= useState([])

  const getData = () =>
    axios.get("http://localhost:8080/favorite").then((response) => {
      console.log(response.data);
      setData(response.data.content);
    });

    useEffect(() => {
      getData();
    }, []);
  

  return (
    <>
      <div className="story_top_container">
        <img
          className="story_photo"
          src="/images/rectangle-13.png"
          alt="mainphoto"
        />
        <img
          className="story_curtain"
          src="/images/rectangle-14.png"
          alt="opacity"
        />
        <p className="story_photo_text">내 입맛별 맛집</p>
      </div>
      <StoryBox></StoryBox>
    </>
  );
};

export default Story;
