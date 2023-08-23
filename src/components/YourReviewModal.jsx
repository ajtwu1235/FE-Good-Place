import Modal from "react-bootstrap/Modal";
import KakaoLoginButton from "./KakaoLoginBtn";

const YourReviewModal = (props) => {


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
                <div>

                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="modal_review">
                    <div className="modal_text_wrap">
                        <p className="modal_review_title">맛집 reivew</p>
                    </div>
                    <div className="modal_input_wrap">
                        <textarea className="comment_input modal_input" type="text" placeholder="착한 리뷰 부탁해요" size="800"></textarea>
                        <button className="comment_btn">SEND</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default YourReviewModal