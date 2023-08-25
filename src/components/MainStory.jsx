import { useParams } from "react-router-dom";
import StoryBox2 from "./StoryBox2";
import StoryList from "./StoryList"; // Import useParams from react-router-dom

const MainStory = () => {
  const { storeId, uid } = useParams(); // Get the storeId from URL parameter

  const StoryContainer = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  };

  return (
    <>
      <div style={StoryContainer}>
        <StoryBox2 storeId={storeId}></StoryBox2> {/* Pass storeId as a prop */}
        <StoryList storeId={uid}></StoryList>
      </div>
    </>
  );
};

export default MainStory;
