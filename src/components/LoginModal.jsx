import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { springApi } from "../network/springApi";
import axios from "axios";
import KakaoLoginButton from "./KakaoLoginBtn";

const LoginModal = (props) => {
  const LoginFormStyle = {
    margin: "60px 41px",
  };

  const ModalTitle = {
    fontSize: "40px",
    textAlign: "center",
  };

  const ModalContent = {
    fontSize: "14px",
    textAlign: "center",
    marginTop: "45px",
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        width: "400px", // 원하는 최대 너비로 설정
        height: "500px", // 원하는 최대 높이로 설정
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
        {/* <Modal.Title id="contained-modal-title-vcenter">
          로그인
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <div style={LoginFormStyle}>
          <h2 style={ModalTitle}>로그인</h2>
          <p style={ModalContent}>
            로그인을 하면 맛집을 추천 할 수 있어요
            <br />
            로그인해서 맛집을 알려주세요
            <br />
            찡긋 찡긋
          </p>
          <div>
            {/* <img src='C:\Users\playdata\gitRepo\FE-Good-Place\public\images\kakao-1.jpg'/> */}
            <KakaoLoginButton />
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default LoginModal;
