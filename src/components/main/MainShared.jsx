import "../../css/main.css";

const MainShared = () => {
  return (
    <>
      <div className="main_container">
        <p className="main_title">Shared photos</p>
        <div className="photoBox">
          <img className="photo_img" src="/images/8.png" alt=""></img>
          <img className="photo_img" src="/images/9.png" alt=""></img>
          <img className="photo_img" src="/images/10.png" alt=""></img>
          <img className="photo_img" src="/images/11.png" alt=""></img>
          <img className="photo_img" src="/images/12.png" alt=""></img>
          <img className="photo_img" src="/images/13.png" alt=""></img>
        </div>
      </div>
    </>
  );
};

export default MainShared;
