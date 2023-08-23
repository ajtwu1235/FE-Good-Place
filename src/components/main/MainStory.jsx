import MyHeader from "../MyHeader";
import StoryBox from "../story/StoryBox";
import StoryList from "../story/StoryList";

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
