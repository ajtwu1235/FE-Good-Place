import "./story.css";
import MyHeader from "./MyHeader";
import StoryBox from "./StoryBox";
import StoryList from "./StoryList";

const MainStory = () => {
  const StoryContainer = {
    display: "flex",
    justifyContent: "space-evenly",
  };

  return (
    <>
      <MyHeader></MyHeader>
      <div style={StoryContainer}>
        <StoryBox></StoryBox>

        <StoryList></StoryList>
      </div>
    </>
  );
};

export default MainStory;
