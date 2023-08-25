import axios from "axios";
import React from "react";

const KakaoLoginButton = () => {
  const kakaoBtn = {
    width: "320px",
    height: "71px",
    flexShrink: "0",
    borderRadius: "50px",
    background: "#FEF01B",
    border: "none",
    marginLeft: "-25px",
  };

  const handleKakaoLogin = () => {
    // 카카오 로그인 URL 생성
    const REST_API_KEY = "233b442d79cbe21409405bd3e8e1fc7c";
    const REDIRECT_URI = "http://localhost:8080/login/oauth2/code/kakao";

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = KAKAO_AUTH_URL;

    // const searchParams = new URLSearchParams(window.location.search);
    // const token = searchParams.get('token'); // 'token' 파라미터 값
    // localStorage.setItem("token",token)
  };

  return (
    <>
      <button style={kakaoBtn} onClick={handleKakaoLogin}>
        <div className="login_btn_inner">
          <img src="/images/kakao-1.png" />
          <span className="login_btn_text"> Kakao톡으로 계속하기 </span>
        </div>
      </button>
    </>
  );
};

export default KakaoLoginButton;
