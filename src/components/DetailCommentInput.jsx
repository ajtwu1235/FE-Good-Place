import "./detail.css";
import {useState} from "react";
import {api} from "../data/api";
const DetailCommentInput = () => {
  const [state, setState] = useState({
    content: "",
    isHidden: false
  });
  const [comment, setComment] = useState("")

  const onSubmitHandler= async (e) =>{
    e.preventDefault();
    setComment("");
    try {
      await api('/api/v1/comments' ,'POST', state)

    } catch (error) {
      setComment(error.response.data);
    }
  }
  return (

    <>
      <div className="detail_container">
        <div className="comment_box">
          <div className="comment_wrap">
            <div className="comment_profile">
              <img
                className="profile_img"
                src="/images/profile-1.png"
                alt=""
              ></img>
              <p className="comment_text">김지혜</p>
            </div>
            <form className="comment_input_wrap">
              <textarea
                className="comment_input"
                type="text"
                placeholder="착한 댓글 부탁해요"
                size="500"
              ></textarea>
              <button className="comment_btn">등록</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailCommentInput;
