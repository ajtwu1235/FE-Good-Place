import "./story.css";
import StoryBox from "./StoryBox";

const Story = () => {
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
