import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../data/api";

const YourReviewModal = (props) => {
  const [userData, setUserData] = useState({
    email: "amy9047@naver.com",
    exp: 1692968240,
    memberId: 1,
    username: "Amy",
  });
  const [message, setMessage] = useState("");
  const [review, setReview] = useState({
    content: "",
  });
  const nav = useNavigate();

  const token = localStorage.getItem("token");
  const getTokenData = () =>
    axios
      .get(`http://localhost:8080/tokenInfo`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setUserData(response.data);
      });

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setReview({ content: value });
  };
  const onClickHandler = (e) => {
    setMessage("");
    try {
      axios
        .post(`/api/v1/reviews/${userData.memberId}/${props.storeId}`, review)
        .then((res) => {
          props.onHide();
        });
      window.location.reload();
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  useEffect(() => {
    getTokenData();
  }, []);

  return (
    <Modal
      {...props}
      centered
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        overflow: "hidden",
      }}
    >
      <Modal.Header closeButton>
        <div></div>
      </Modal.Header>
      <Modal.Body>
        <div className="modal_review">
          <div className="modal_text_wrap">
            <p className="modal_review_title">맛집 reivew</p>
          </div>
          <div className="modal_input_wrap">
            <textarea
              className="comment_input modal_input"
              placeholder="착한 리뷰 부탁해요"
              size="800"
              onChange={onChangeHandler}
            ></textarea>
            <button className="comment_btn" onClick={onClickHandler}>
              SEND
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default YourReviewModal;
