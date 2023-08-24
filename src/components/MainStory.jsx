
import StoryList from "./StoryList";
import StoryBox2 from "./StoryBox2";

const MainStory = () => {
  const StoryContainer = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems:"flex-start"
  };

  return (
    <>
      <div style={StoryContainer}>
     
        <StoryBox2></StoryBox2>
        

        <StoryList></StoryList>
      </div>
    </>
  );
};

export default MainStory;
