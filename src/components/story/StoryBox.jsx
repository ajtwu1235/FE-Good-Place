import "../../css/story.css";

const StoryBox = () => {
  return (
    <>
      <div className="storyBox">
        <div className="storybox_wrap">
          <img
            src="/images/friedpork.png"
            alt="pork"
            className="story_food_img"
          />
          <div className="storybox_text">
            <div className="storybox_wrap1">
              <p className="story_text story_text1">Editer.</p>
              <p className="story_text story_text2">현수정</p>
              <img
                src="/images/heart-1.svg"
                alt="heart"
                className="story_like"
              />
            </div>
            <p className="story_text story_title">
              수정이가 선택한 제주맛집 10곳
            </p>
            <p className="story_text story_title2">제주 인기 터짐!</p>
            <div className="storybox_wrap2">
              <span className="story_text story_create_date">2023-08-10</span>
              <span className="story_text story_text_bar">|</span>
              <img
                src="/images/heart-1.svg"
                alt="heart"
                className="story_like_small"
              />
              <span className="story_text story_like_count">123</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StoryBox;
