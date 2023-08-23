import "./detail.css";
const DetailComment = () => {
  return (
    <>
      <div className="detail_container">
        <hr className="detail_line"></hr>
        <div className="comment_profile">
          <img className="profile_img" src="/images/profile-1.png" alt=""></img>
          <p className="comment_text">김지혜</p>
        </div>
        <p className="comment_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ratione
          deserunt minima tempore numquam omnis, tempora quae? Mollitia neque
          modi quos dolorem alias sit vel quisquam libero, ducimus dolor rem.
        </p>
        <p className="comment_date">2023-08-10 14:45</p>
      </div>
    </>
  );
};
export default DetailComment;
